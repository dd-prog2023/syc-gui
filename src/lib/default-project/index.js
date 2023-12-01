import projectData from './project-data';

/* eslint-disable import/no-unresolved */
import popWav from '!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
import meowWav from '!arraybuffer-loader!./83c36d806dc92327b9e7049a565c6bff.wav';
import hahaWav from '!arraybuffer-loader!./d6710c4767d5319a535bfb4cc0659bf3.wav';
import kkWav from '!arraybuffer-loader!./e5a346abc2f8f8c892ca43c396862186.wav';
import backdrop from '!raw-loader!./cd21514d0531fdffb22204e0ec5ed84a.svg';
import costume1 from '!raw-loader!./bcf454acf82e4504149f7ffe07081dbc.svg';
import costume2 from '!raw-loader!./0fb9be3e8397c983338cb71dc84d0b25.svg';
import robot1 from '!raw-loader!./8E92AC193A2D2994EF3EBAF79218D277.svg';
import robot2 from '!raw-loader!./7307AA964C82F980B24DE6367BEC471F.svg';
import robot3 from '!raw-loader!./73FA0ADF6D85D35ADE3BEE71B51A3F9C.svg';
/* eslint-enable import/no-unresolved */

const defaultProject = translator => {
    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        /* global TextEncoder */
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: '83a9787d4cb6f3b7632b4ddfebf74367',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(popWav)
    }, {
        id: '83c36d806dc92327b9e7049a565c6bff',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(meowWav)
    }, {
        id: 'd6710c4767d5319a535bfb4cc0659bf3',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(hahaWav)
    }, {
        id: 'e5a346abc2f8f8c892ca43c396862186',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(kkWav)
    }, {
        id: 'cd21514d0531fdffb22204e0ec5ed84a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop)
    }, {
        id: 'bcf454acf82e4504149f7ffe07081dbc',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume1)
    }, {
        id: '0fb9be3e8397c983338cb71dc84d0b25',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(costume2)
    }, {
        id: '8E92AC193A2D2994EF3EBAF79218D277',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(robot1)
    }, {
        id: '7307AA964C82F980B24DE6367BEC471F',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(robot2)
    }, {
        id: '73FA0ADF6D85D35ADE3BEE71B51A3F9C',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(robot3)
    }];
};

export default defaultProject;
