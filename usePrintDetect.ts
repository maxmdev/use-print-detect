import { useState, useEffect, useCallback } from 'react';

function usePrintDetect(): boolean {
    const [isPrintDetected, setIsPrintDetected] = useState<boolean>(false);

    const handlePrintEvent = useCallback((event: MediaQueryListEvent) => {
        const { matches } = event;

        setIsPrintDetected(matches);
    }, []);

    useEffect(() => {
        const printMediaList =
            typeof window !== 'undefined' && window.matchMedia
                ? window.matchMedia('print')
                : null;

        if (printMediaList) {
            printMediaList.addEventListener('change', handlePrintEvent);
        }

        return () => {
            printMediaList?.removeEventListener('change', handlePrintEvent);
        };
    });

    return isPrintDetected;
}

export default usePrintDetect;