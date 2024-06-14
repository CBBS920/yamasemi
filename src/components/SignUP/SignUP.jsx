import React, { useState } from "react";
import { CheckBox } from '../../common/CheckBox/CheckBox';
import { RadioButton } from "../../common/RadioButton/RadioButton";
import { TextBox } from '../../common/TextBox/TextBox';
import { Dropdown } from '../../common/Dropdown/Dropdown';
import {
    ERR_CHECK,
    ERR_RADIO_BUTTON,
    ERR_MAIL,
    REQUIRED_ENTRY,
    COVENANTS_TITLE,
    COVENANTS_URL,
    COVENANTS_SIGN_UP,
    COVENANTS_DESCRIPTION,
    CHECKBOX_COVENANTS,
    INDISPENSABLE,
    PRIVACY_POLICY_URL,
    PRIVACY_POLICY,
    CHECKBOX_PRIVACY_POLICY,
    RADIO_BUTTON_MINOR_CONSENT,
    RADIO_BUTTON_MINOR,
    RADIO_BUTTON_ADULT,
    AGE_GROUP,
    MINOR,
    ADULT,
    SELECT_PLAN_TITLE,
    SELECT_PLAN,
    HIKARI,
    SELECT_PLAN_HIKARI,
    SELECT_PLAN_HIKARI_M,
    HIKARI_TWO_HUNDRED,
    HIKARI_ONE_HUNDRED,
    HIKARI_TWENTY,
    HIKARI_TWO_STEP,
    MUSEN,
    SELECT_PLAN_MUSEN,
    SELECT_PLAN_MUSEN_M,
    MUSEN_FIXED_AMOUNT,
    MUSEN_TWO_STEP,
    ROUTER,
    BUY_LAN_ROUTER,
    DESIRED,
    NO_DESIRED,
    SUPPORT,
    DESIRED_SUPPORT,
    PAY_METHOD,
    SELECT_PAY,
    PAY,
    CREDIT_CARD,
    RECEIPT_MAIL,
    CREDIT_CARD_NOTES,
    DIRECT_DEBIT,
    DIRECT_DEBIT_OPTIONS,
    SAMPLE_MAIL,
    APPLICANT,
    INPUT_INFO,
    SUBSCRIBER_NAME,
    SUBSCRIBER_NAME_SAMPLE,
    SUBSCRIBER_NAME_KANA,
    SUBSCRIBER_NAME_KANA_SAMPLE,
    DATE_OF_VIRTH,
    NAME_OF_AN_ERA,
    YEAR,
    MONTH,
    DAY,
    SEX,
    MAN,
    WOMAN,
    POSTAL_CODE,
    POSTAL_CODE_SAMPLE,
    ADDRESS,
    ADDRESS_SAMPLE,
    PHONE_NUM,
    PHONE_NUM_SAMPLE,
    GOOD_TIME,
    AM,
    PM,
    EVENING,
    MAIL_ADDRESS,
    MAIL_ADDRESS_NOTES,
    CORPORATE_CONTACT_PERSON,
    FAX_NUM,
    PLACE_OF_EMPLOYMENT,
    WORK_PHONE_NUM,
    WORK_FAX_NUM,
    PROVIDER_NAME,
    IP_TELEPHONY,
    NO_USE,
    USE,
    PC_OS,
    PCS_NUM,
    LESS_THAN_FIVE,
    FIVE_OR_HIGHER,
    TERMINAL_EQUIPMENT_AGREEMENT,
    SUBMIT,
    NO_SUBMIT,
} from '../../utils/constants';
import h1 from '../../img/SignUp.png';
import styles from './SignUP.module.css';


// お申込みコンポーネント
export const SignUP = () => {

    // エラー状態管理
    const [errors, setErrors] = useState({
        covenants: '',
        privacyPolicy: '',
        minorConsent: '',
        hikariPlan: '',
        musenPlan: '',
        lanRouter: '',
        support: '',
        receiptMail: '',
        email: ''
    });

    // 入力の判定処理
    const validate = () => {
        const newErrors = {};
        if (!isCovenantsChecked) newErrors.covenants = ERR_CHECK;
        if (!isPPChecked) newErrors.privacyPolicy = ERR_CHECK;
        if (!selectedMinorOption) newErrors.minorConsent = ERR_RADIO_BUTTON;
        if (!selectedHikariCourse) newErrors.hikariPlan = ERR_RADIO_BUTTON;
        if (!selectedMusenCourse) newErrors.musenPlan = ERR_RADIO_BUTTON;
        if (!routerOption) newErrors.lanRouter = ERR_RADIO_BUTTON;
        if (!supportOption) newErrors.support = ERR_RADIO_BUTTON;

        // メールアドレスの形式チェック
        if (!receiptMailText && creditOption === PAY) {
            newErrors.email = REQUIRED_ENTRY;
        } else if ((!/\S+@\S+\.\S+/.test(receiptMailText) && creditOption === PAY)) {
            newErrors.email = ERR_MAIL;
        }

        if (!debitSelected) newErrors.debitOption = ERR_RADIO_BUTTON;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 送信ボタン押下後の処理
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            // support@cbbs.jpに送信するAPI
        }
    };

    // 契約約款チェック管理
    const [isCovenantsChecked, setIsCovenantsChecked] = useState(false);

    // 契約約款チェック押下時の処理
    const handleCovenantsCheckChange = (event) => {
        setIsCovenantsChecked(event.target.checked);
    };


    // プライバシーポリシーチェック管理
    const [isPPChecked, setIsPPChecked] = useState(false);

    // プライバシーポリシーチェック押下時の処理
    const handlePPCheckChange = (event) => {
        setIsPPChecked(event.target.checked);
    };


    // 未成年同意ラジオボタン管理
    const [selectedMinorOption, setSelectedMinorOption] = useState("");

    // 未成年同意ラジオボタン押下時の処理
    const handleMinorRadioChange = (event) => {
        setSelectedMinorOption(event.target.value);
    };


    // 「◆光エリアにお住まいの方はこちら」ラジオボタン管理
    const [selectedHikariCourse, setSelectedHikariCourse] = useState("");

    //「◆光エリアにお住まいの方はこちら」ラジオボタン押下時の処理
    const handleHikariCourseChange = (event) => {
        setSelectedHikariCourse(event.target.value);
    };


    // 「◆無線エリアにお住まいの方はこちら」ラジオボタン管理
    const [selectedMusenCourse, setSelectedMusenCourse] = useState("");

    // 「◆無線エリアにお住まいの方はこちら」ラジオボタン押下時の処理
    const handleMusenCourseChange = (event) => {
        setSelectedMusenCourse(event.target.value);
    };


    // 「◆無線LANルータを希望しますか？」ラジオボタン管理
    const [routerOption, setRouterOption] = useState("");

    // 「◆無線LANルータを希望しますか？」ラジオボタン押下時の処理
    const handleRouterChange = (event) => {
        setRouterOption(event.target.value);
    };


    // 「◆初回インターネット接続設定及びメール設定サポートを希望しますか？」ラジオボタン管理
    const [supportOption, setSupportOption] = useState("");

    // 「◆初回インターネット接続設定及びメール設定サポートを希望しますか？」ラジオボタン押下時の処理
    const handleSupportChange = (event) => {
        setSupportOption(event.target.value);
    };


    // クレジットカードラジオボタン管理
    const [creditOption, setCreditOption] = useState("");

    // クレジットカードラジオボタン押下時の処理
    const handleCreditChange = (event) => {
        setCreditOption(event.target.value);
    };

    // 登録用メールアドレステキスト入力管理
    const [receiptMailText, setreceiptMailText] = useState('');

    // 登録用メールアドレステキスト入力管理
    const handleReceiptMailChange = (event) => {
        setreceiptMailText(event.target.value);
    };


    // 口座振替ラジオボタン管理
    const [debitOption, setDebitOption] = useState("");

    // 口座振替ラジオボタン押下時の処理
    const handleDebitChange = (event) => {
        setDebitOption(event.target.value);
    };

    // 口座振替ドロップダウン管理
    const [debitSelected, setDebitSelected] = useState("");

    // 口座振替ドロップダウン押下時の処理
    const handleDebitDropdownChange = (event) => {
        setDebitSelected(event.target.value);
    };

    // 金融機関ドロップダウンメニュー
    const options = [
        { value: 'option1', label: DIRECT_DEBIT_OPTIONS.TWO },
        { value: 'option2', label: DIRECT_DEBIT_OPTIONS.THREE },
        { value: 'option3', label: DIRECT_DEBIT_OPTIONS.FOUR },
        { value: 'option4', label: DIRECT_DEBIT_OPTIONS.FIVE },
        { value: 'option5', label: DIRECT_DEBIT_OPTIONS.SIX }
    ];

    return (
        <form onSubmit={handleSubmit} className={styles.signUPContainer}>
            <h1 className={styles.h1}>
                <img src={h1} alt="h1" />
            </h1>
            <div className={styles.title}>
                <h2 className={styles.h2}>
                    {COVENANTS_TITLE}
                </h2>
            </div>
            <div className={styles.container}>
                <p className={styles.p}>
                    <a href={COVENANTS_URL}>{COVENANTS_SIGN_UP}</a>
                    {COVENANTS_DESCRIPTION}
                    <p className={styles.kome}>{INDISPENSABLE}</p>
                </p>
                <div className={styles.indispensable}>
                    <CheckBox
                        label={CHECKBOX_COVENANTS}
                        className={`${styles.checkboxLabelCustom}`}
                        checked={isCovenantsChecked}
                        onChange={handleCovenantsCheckChange}
                        hasError={!!errors.covenants}
                        errorMessage={errors.covenants}
                    />
                </div>
                <p className={styles.p}>
                    <a href={PRIVACY_POLICY_URL}>{PRIVACY_POLICY}</a>
                    {COVENANTS_DESCRIPTION}
                    <p className={styles.kome}>{INDISPENSABLE}</p>
                </p>
                <div className={styles.indispensable}>
                    <CheckBox
                        label={CHECKBOX_PRIVACY_POLICY}
                        className={`${styles.checkboxLabelCustom}`}
                        checked={isPPChecked}
                        onChange={handlePPCheckChange}
                        hasError={!!errors.privacyPolicy}
                        errorMessage={errors.privacyPolicy}
                    />
                </div>
                <p className={styles.p}>
                    {RADIO_BUTTON_MINOR_CONSENT}
                    <p className={styles.kome}>{INDISPENSABLE}</p>
                </p>
                <div className={styles.indispensable}>
                    <RadioButton
                        className={styles.radioLabelCustom}
                        label={RADIO_BUTTON_MINOR}
                        name={AGE_GROUP}
                        checked={selectedMinorOption === MINOR}
                        onChange={handleMinorRadioChange}
                        value={MINOR}
                        hasError={!!errors.minorConsent}
                    />
                    <RadioButton
                        className={styles.radioLabelCustom}
                        label={RADIO_BUTTON_ADULT}
                        name={AGE_GROUP}
                        checked={selectedMinorOption === ADULT}
                        onChange={handleMinorRadioChange}
                        value={ADULT}
                        hasError={!!errors.minorConsent}
                        errorMessage={errors.minorConsent}
                    />
                </div>
            </div>
            <div className={styles.title}>
                <h2 className={styles.h2}>{SELECT_PLAN_TITLE}</h2>
            </div>
            <div className={styles.container}>
                <p className={styles.p}>
                    {SELECT_PLAN}
                    <p className={styles.kome}>{INDISPENSABLE}</p>
                </p>
                <div className={styles.courseContainer}>
                    <div className={styles.courseGroup}>
                        <p className={styles.courseHeader}>
                            {SELECT_PLAN_HIKARI}
                        </p>
                        <RadioButton
                            className={styles.radioLabelCustom}
                            label={SELECT_PLAN_HIKARI_M.ONE}
                            name={HIKARI}
                            checked={selectedHikariCourse === HIKARI_TWO_HUNDRED}
                            onChange={handleHikariCourseChange}
                            value={HIKARI_TWO_HUNDRED}
                        />
                        <RadioButton
                            className={styles.radioLabelCustom}
                            label={SELECT_PLAN_HIKARI_M.TWO}
                            name={HIKARI}
                            checked={selectedHikariCourse === HIKARI_ONE_HUNDRED}
                            onChange={handleHikariCourseChange}
                            value={HIKARI_ONE_HUNDRED}
                        />
                        <RadioButton
                            className={styles.radioLabelCustom}
                            label={SELECT_PLAN_HIKARI_M.THREE}
                            name={HIKARI}
                            checked={selectedHikariCourse === HIKARI_TWENTY}
                            onChange={handleHikariCourseChange}
                            value={HIKARI_TWENTY}
                        />
                        <RadioButton
                            className={styles.radioLabelCustom}
                            label={SELECT_PLAN_HIKARI_M.FOUR}
                            name={HIKARI}
                            checked={selectedHikariCourse === HIKARI_TWO_STEP}
                            onChange={handleHikariCourseChange}
                            value={HIKARI_TWO_STEP}
                        />
                    </div>
                    <div className={styles.courseGroup}>
                        <p className={styles.courseHeader}>
                            {SELECT_PLAN_MUSEN}
                        </p>
                        <RadioButton
                            className={styles.radioLabelCustom}
                            label={SELECT_PLAN_MUSEN_M.ONE}
                            name={MUSEN}
                            checked={selectedMusenCourse === MUSEN_FIXED_AMOUNT}
                            onChange={handleMusenCourseChange}
                            value={MUSEN_FIXED_AMOUNT}
                        />
                        <RadioButton
                            className={styles.radioLabelCustom}
                            label={SELECT_PLAN_MUSEN_M.TWO}
                            name={MUSEN}
                            checked={selectedMusenCourse === MUSEN_TWO_STEP}
                            onChange={handleMusenCourseChange}
                            value={MUSEN_TWO_STEP}
                        />
                    </div>
                    <div className={styles.courseGroup}>
                        <p className={styles.courseHeader}>
                            {BUY_LAN_ROUTER}
                        </p>
                        <RadioButton
                            className={styles.radioLabelCustom}
                            label={DESIRED}
                            name={ROUTER}
                            checked={routerOption === DESIRED}
                            onChange={handleRouterChange}
                            value={DESIRED}
                        />
                        <RadioButton
                            className={styles.radioLabelCustom}
                            label={NO_DESIRED}
                            name={ROUTER}
                            checked={routerOption === NO_DESIRED}
                            onChange={handleRouterChange}
                            value={NO_DESIRED}
                        />
                    </div>
                    <div className={styles.courseGroup}>
                        <p className={styles.courseHeader}>
                            {DESIRED_SUPPORT}
                        </p>
                        <RadioButton
                            className={styles.radioLabelCustom}
                            label={DESIRED}
                            name={SUPPORT}
                            checked={supportOption === DESIRED}
                            onChange={handleSupportChange}
                            value={DESIRED}
                        />
                        <RadioButton
                            className={styles.radioLabelCustom}
                            label={NO_DESIRED}
                            name={SUPPORT}
                            checked={supportOption === NO_DESIRED}
                            onChange={handleSupportChange}
                            value={NO_DESIRED}
                        />
                    </div>
                </div>

            </div>
            <div className={styles.title}>
                <h2 className={styles.h2}>{PAY_METHOD}</h2>
            </div>
            <div className={styles.container}>
                <p className={styles.p}>
                    {SELECT_PAY}
                    <p className={styles.kome}>{INDISPENSABLE}</p>
                </p>
                <RadioButton
                    className={styles.radioLabelCustom}
                    label={CREDIT_CARD}
                    name={PAY}
                    checked={creditOption === PAY}
                    onChange={handleCreditChange}
                    value={PAY}
                    hasError={!!errors.creditOption}
                    errorMessage={errors.creditOption}
                />
                <div className={styles.emailContainer}>
                    <p className={styles.mailP}>
                        {RECEIPT_MAIL}
                    </p>
                    <TextBox
                        placeholder={SAMPLE_MAIL}
                        value={receiptMailText}
                        onChange={handleReceiptMailChange}
                        width="100%"
                        hasError={!!errors.email}
                        errorMessage={errors.email}
                    />
                </div>
                <div className={styles.creditBack}>
                    <p className={styles.text}>{CREDIT_CARD_NOTES.ONE}</p>
                    <p className={styles.text}>{CREDIT_CARD_NOTES.TWO}</p>
                    <p className={styles.text}>{CREDIT_CARD_NOTES.THREE}</p>
                </div>
                <RadioButton
                    className={styles.radioLabelCustom}
                    label={DIRECT_DEBIT}
                    name={PAY}
                    checked={debitOption === PAY}
                    onChange={handleDebitChange}
                    value={PAY}
                    hasError={!!errors.debitOption}
                    errorMessage={errors.debitOption}
                />
                <Dropdown
                    value={debitSelected}
                    onChange={handleDebitDropdownChange}
                    options={options}
                    placeholder={DIRECT_DEBIT_OPTIONS.ONE}
                    className={styles.dropdown}
                    hasError={!!errors.debitOption}
                    errorMessage={errors.debitOption}
                />
            </div>
            <div className={styles.title}>
                <h2 className={styles.h2}>
                    {APPLICANT}
                </h2>
            </div>
            <button type="submit">{SUBMIT}</button>
        </form>
    );
};

