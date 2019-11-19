import React, { useState } from 'react';

const ThemeSwitch = () => {
	const [theme, setTheme] = useState('light-theme');
	const [checked, setChecked] = useState(false);

	const handleThemeChange = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme');
			setChecked(true);
		} else {
			setTheme('light-theme');
			setChecked(false);
		}
	}

	const Switch = () => {
		return (
			<div className="theme-switch-wrapper">
				<label className="theme-switch" htmlFor="checkbox">
					<input type="checkbox" id="checkbox" checked={checked} onChange={handleThemeChange} />
					<div className="slider round"></div>
				</label>
				<span className="theme-switch__text theme-text">Dark Mode</span>
			</div>
		);
	}

	return [theme, Switch];
};
export default ThemeSwitch;