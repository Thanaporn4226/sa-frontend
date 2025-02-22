import { Drawer, IconButton, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { styled } from '@mui/material/styles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import HomeIcon from '@mui/icons-material/Home';

import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { useNavigate } from 'react-router-dom';



export default function DrawerBar({ role, drawerWidth, handleDrawerClose, open , theme}: any) {
    

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const Listitemlink = () => {
        var menu: any[] = [
            { "text": "หน้าแรก", "icon": <HomeIcon />, "link": "/" },
        ];

        if (role === "admin") {
            menu = [
                { "text": "A", "icon": <InboxIcon />, "link": "/" },
                { "text": "B", "icon": <InboxIcon />, "link": "/dashboard" },
                { "text": "C", "icon": <InboxIcon />, "link": "/localdashboard" },
            ]
        } else if (role === "intendant") {
            menu = [
                ...menu,
                { "text" : "ระบบบันทึกข้อมูลยา",icon: <MedicalServicesIcon />, "link": "/medicines/Home"},
                //{ "text": "A", "icon": <InboxIcon />, "link": "/" } form 

            ]
        }
        else if (role === "pharmacist") {
            menu = [
                ...menu,
                { "text": "หน้าแรกระบบจ่ายยา", "icon": <DashboardIcon />, "link": "/PayMedicineHome" },
                { "text": "หน้าแรกระบบสั่งยา", "icon": <HomeIcon />, "link": "/PrescriptionHome" },
                { "text": "หน้าแรกระบบฉลากยา", "icon": <HomeIcon />, "link": "/medicine_label/home" },

                

            ]
        }
        else if (role === "payment") {
            menu = [
                //{ "text": "A", "icon": <InboxIcon />, "link": "/" } form 

            ]
        }

        
        const navigator = useNavigate();
        return (
            menu.map((data, index) => (
                <ListItem key={data.text} disablePadding>
                    <ListItemButton onClick={()=>{navigator(data.link)}}>
                        <ListItemIcon>
                            {data.icon}
                        </ListItemIcon>
                        <ListItemText primary={data.text} />
                    </ListItemButton>
                </ListItem>
            ))
        )
    }
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {
                    Listitemlink()
                }
            </List>
        </Drawer>
    )
}
