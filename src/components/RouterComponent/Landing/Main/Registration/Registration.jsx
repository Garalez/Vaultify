/* eslint-disable max-len */
import style from './Registration.module.scss';
import { useState } from 'react';
import FullNameForm from './FullNameForm';
import ContactsForm from './ContactsForm';
import AccountCreationForm from './AccountCreationForm';
import RegistrationSuccess from './RegistrationSuccess';
import RegistrationTabs from './RegistrationTabs';
import { useDispatch, useSelector } from 'react-redux';
import { createUserRequestAsync } from '../../../../../store/accountCreationRequest/accountCreationRequestActions';
import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';

export const Registration = () => {
  const dispatch = useDispatch();
  const userCreationStatus = useSelector((state) => state.createUser);
  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState({
    firstTab: true,
    secondTab: false,
    thirdTab: false,
  });

  const [isTabValid, setIsTabValid] = useState({
    firstTabValid: false,
    secondTabIsValid: false,
    thirdTabIsValid: false,
  });

  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    patronymic: '',
    phoneNumber: '',
    eMail: '',
    login: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      const regex = /[^0-9|+]/g;
      const phoneValue = value.replace(regex, '');

      return setFormValues({ ...formValues, phoneNumber: phoneValue });
    }

    setFormValues({ ...formValues, [name]: value });
  };

  const fullNameFormSubmit = () => {
    setIsTabValid({ ...isTabValid, firstTabValid: true });

    setActiveTab(() => ({
      firstTab: false,
      secondTab: true,
      thirdTab: false,
    }));
  };

  const contactsFormSubmit = () => {
    setIsTabValid({ ...isTabValid, secondTabIsValid: true });

    setActiveTab(() => ({
      firstTab: false,
      secondTab: false,
      thirdTab: true,
    }));
  };

  const accountCreationFormSubmit = () => {
    setIsTabValid({ ...isTabValid, thirdTabIsValid: true });

    dispatch(createUserRequestAsync({ ...formValues }));
  };

  const switchActiveTab = (tab) => {
    const copyActiveTabObj = { ...activeTab };

    Object.keys(copyActiveTabObj).forEach((item) => {
      item === tab ? (copyActiveTabObj[tab] = true) : (copyActiveTabObj[item] = false);
    });

    setActiveTab(() => copyActiveTabObj);
  };

  return (
    <section className={style.registrationSection} id='registration'>
      <div className={style.registrationWrapper}>
        <h2 className={style.registrationTitle}>{Langs[language].main.registration[0]}</h2>
        {userCreationStatus.status === 'success' || userCreationStatus.status === 'loading' ? (
          <RegistrationSuccess status={userCreationStatus.status} />
        ) : (
          <>
            <p className={style.registrationText}>{Langs[language].main.registration[1]}</p>
            <div className={style.registrationFormUnderlay}>
              <div className={style.registrationFormWrapper}>
                <RegistrationTabs
                  switchActiveTab={switchActiveTab}
                  activeTab={activeTab}
                  isTabValid={isTabValid}
                />
                {activeTab.firstTab && (
                  <FullNameForm
                    fullNameFormSubmit={fullNameFormSubmit}
                    formValues={formValues}
                    handleChange={handleChange}
                  />
                )}
                {activeTab.secondTab && (
                  <ContactsForm
                    contactsFormSubmit={contactsFormSubmit}
                    formValues={formValues}
                    handleChange={handleChange}
                  />
                )}
                {activeTab.thirdTab && (
                  <AccountCreationForm
                    accountCreationFormSubmit={accountCreationFormSubmit}
                    formValues={formValues}
                    handleChange={handleChange}
                    userCreationStatus={userCreationStatus.error}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
