import PropTypes from 'prop-types';
import React from 'react';

import locales from 'scratch-l10n';
import styles from './language-selector.css';

// supported languages to exclude from the menu, but allow as a URL option
const ignore = [];

const LanguageSelector = ({currentLocale, label, onChange}) => (
    <select
        aria-label={label}
        className={styles.languageSelect}
        value={currentLocale}
        onChange={onChange}
    >
        <option value="zh-cn">简体中文</option>,<option value="en">English</option>
    </select>
);

LanguageSelector.propTypes = {
    currentLocale: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
};

export default LanguageSelector;
