/**
 * @author Vikhyat Singh<vikhyat.singh@314ecorp.com>
 * Image editor for menu
 */

import React from 'react';
import SubtractSelectionIcon from '../icons/SubtractSelectionIcon';
import TailoringIcon from '../icons/TailoringIcon';
import WriteIcon from '../icons/WriteIcon';
import { Menu } from '../utils/utils';

interface IProps {
	setMenu: React.Dispatch<React.SetStateAction<Menu | ''>>;
	menu: Menu | '';
}

const EditorMenu: React.FC<IProps> = (props) => {
	const { setMenu, menu } = props;
	const handleClick = (option: Menu) => () => {
		setMenu(option);
	};

	return (
		<div className='flex items-center gap-2 my-3'>
			<button
				className={`custom-button ${menu === Menu.ANNOTATE ? 'active' : ''}`}
				onClick={handleClick(Menu.ANNOTATE)}
			>
				<WriteIcon />
				Annotate
			</button>
			<button className={`custom-button ${menu === Menu.CROP ? 'active' : ''}`} onClick={handleClick(Menu.CROP)}>
				<TailoringIcon />
				Crop
			</button>
			<button className={`custom-button ${menu === Menu.BLUR ? 'active' : ''}`} onClick={handleClick(Menu.BLUR)}>
				<SubtractSelectionIcon />
				Redact
			</button>
		</div>
	);
};

export default EditorMenu;
