import html from '../modules/htm.js';
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText, ListSubheader,
    Toolbar
} from "../modules/material-ui.js"
import MaterialIcon from "../components/MaterialIcon.js"
import {Link, useLocation} from "../modules/react-router-dom.js"
import {useContext} from "../modules/react.js"
import {AuthContext} from "../App.js"

const drawerWidth = 240;

function NavDrawer(props) {

    const { user } = useContext(AuthContext);

    const pages = [
        {
            icon: 'home',
            title: 'Dasbor',
            path: ''
        },
        {
            icon: 'calendar_today',
            title: 'Kalender',
            path: '/calendar'
        },
        {
            icon: 'event',
            title: 'Cuti saya',
            path: '/my_leaves'
        },
    ]

    const adminPages = [
        {
            icon: 'rule',
            title: 'Persetujuan',
            path: '/approvals'
        },
        {
            icon: 'date_range',
            title: 'Hari libur',
            path: '/holidays'
        },
        {
            icon: 'people',
            title: 'Karyawan',
            path: '/employees'
        },
        {
            icon: 'groups',
            title: 'Divisi',
            path: '/divisions'
        },
        {
            icon: 'description',
            title: 'Laporan',
            path: '/report'
        },
    ]

    return html`
        <${Drawer}
                variant="permanent"
                sx=${{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
        >
            <${Toolbar} />
            <${Box} sx={{ overflow: 'auto' }}>
            <${List}>
                ${pages.map(page => html`
                    <${ListItemButton} key=${page.path} component=${Link} to=${props.url + page.path} selected=${props.url + page.path === useLocation().pathname}>
                        <${ListItemIcon}>
                            <${MaterialIcon}>${page.icon}<//>
                        <//>
                        <${ListItemText} primary=${page.title} />
                    <//>
                `)}
            <//>
            ${user.role.id === 1 ? html`
                <${Divider} />
                <${List} subheader=${html`<${ListSubheader}>Panel HRD<//>`}>
                    ${adminPages.map(page => html`
                        <${ListItemButton} key=${page.path} component=${Link} to=${props.url + page.path} selected=${props.url + page.path === useLocation().pathname}>
                            <${ListItemIcon}>
                                <${MaterialIcon}>${page.icon}<//>
                            <//>
                            <${ListItemText} primary=${page.title} />
                        <//>
                    `)}
                <//>
            ` : null}
        <//>
        <//>
    `;
}

export default NavDrawer;