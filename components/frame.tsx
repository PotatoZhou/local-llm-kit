/* eslint-disable @next/next/no-img-element */
// import { Box, Divider, Drawer, List, ListItem, Typography } from '@mui/material';
// import React from 'react';

export default function Layout({ children }: { children: React.ReactNode; }) {
    const open = true;
    return (
        <>
            <div className="flex flex-col flex-grow overflow-x-hidden bg-white border-r border-gray-200">
                <div className="w-32 flex items-center flex-shrink-0 px-4 bg-white">
                    <div
                    // onClick={() => {
                    //     router.push('/application');
                    // }}
                    className="flex items-center justify-center"
                    >
                    <span className="ml-4 text-xl">flex</span>
                    </div>
                </div>
            </div>
        </>
    )
}
