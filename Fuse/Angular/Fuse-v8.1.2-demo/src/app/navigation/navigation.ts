import { FuseNavigation } from '@fuse/types';
export const navigation: FuseNavigation[] = [
    {
        id       :  'applications',
        title    :  'Applications',
        translate:  'NAV.APPLICATIONS',
        type     :  'group',
        icon     :  'app',
        children : [
           {
                id       : 'calendar',
                title    : 'Homepage',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'home',
                url      : '/apps/dashboards/project'
            },
            {
                id   :  'analytics',
                title:  'Grafieken',
                type :  'item',
                icon :  'Question',
                url  :  '/apps/dashboards/analytics'

            },
            {
                id       :  'calendar',
                title    :  'Vragen',
                translate:  'NAV.CALENDAR',
                type     :  'item',
                icon     :  'warning',
                url      :  '/apps/calendar'
            }

        ]
    },
  
];
