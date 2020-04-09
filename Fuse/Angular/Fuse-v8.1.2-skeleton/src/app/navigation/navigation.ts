import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [

			{
                id       : 'Dashboard',
                title    : 'Dashboard',
                translate: 'Dashboard',
                type     : 'item',
                icon     : 'home',
                url      : '/Dashboard',
                badge    : {
                    title    : '76',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44000',
                    fg       : '#FFFFFF'
                }
            },
			    {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'jane.jpg',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
			{
                id       : 'Grafieken',
                title    : 'Grafieken',
                translate: 'Grafieken',
                type     : 'item',
                icon     : '',
                url      : '/Grafieken',
                badge    : {
                    title    : '76',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44001',
                    fg       : '#FFFFFF'
                }
            },
			
        ]
    }
];
