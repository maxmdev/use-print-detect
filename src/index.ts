import { useState, useEffect, useCallback } from 'react';

function usePrintDetect(): boolean {
    const [isPrintDetected, setIsPrintDetected] = useState<boolean>(false);

    const handleToggleEvent = useCallback((e: Event) => {
        const { type } = e;

        switch (type) {
            case 'beforeprint':
                return setIsPrintDetected(true);
            default:
                return setIsPrintDetected(false);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('beforeprint', handleToggleEvent);
            window.addEventListener('afterprint', handleToggleEvent);

            return () => {
                window.removeEventListener('beforeprint', handleToggleEvent);
                window.removeEventListener('afterprint', handleToggleEvent);
            };
        }
    });

    return isPrintDetected;
}

export default usePrintDetect;
