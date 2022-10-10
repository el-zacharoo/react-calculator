import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { macTheme } from './MacCalculator/macTheme';
import { MacCalculator } from './MacCalculator';
import { AndroidCalculator } from './AndroidCalculator';
import { androidTheme } from './AndroidCalculator/androidTheme';

export const Switch = (props: any) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (e: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const themeSwitch = () => {
        if (value === 1) {
            return androidTheme;
        }
        else if (value === 2) {
            return androidTheme;
        }
        return macTheme;
    }
    const theme = themeSwitch();

    return (
        <Box sx={{ width: '100%' }}>
            <ThemeProvider theme={theme} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                    <Tabs value={value} onChange={handleChange} >
                        {tabArr.map((tab, index) =>
                            <Tab key={index} label={tab.label} />
                        )}
                    </Tabs>
                </Box>
                <Container maxWidth="xs">
                    {tabArr[0].state === value && <MacCalculator {...props} />}
                    {tabArr[1].state === value && <AndroidCalculator {...props} />}
                </Container>
            </ThemeProvider>
        </Box>
    );
}

const tabArr = [
    { label: 'Mac Calculator', state: 0, theme: macTheme },
    { label: 'Android Calculator', state: 1, theme: androidTheme }
]