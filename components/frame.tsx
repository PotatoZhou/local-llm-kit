/* eslint-disable @next/next/no-img-element */
// import { Box, Divider, Drawer, List, ListItem, Typography } from '@mui/material';
// import React from 'react';
import Sidebar from "./nav";

export default function Layout({ children }: { children: React.ReactNode; }) {
    const open = true;
    return (
        <>
            <Sidebar></Sidebar>
        </>
    )
}
