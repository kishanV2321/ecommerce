import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

interface Metric {
    name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB';
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
    delta: number;
    id: string;
    entries: PerformanceEntry[];
}

const reportWebVitals = (onPerfEntry: (metric: Metric) => void) => {
    if (onPerfEntry && typeof onPerfEntry === 'function') {
        onCLS(onPerfEntry);
        onFID(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
    }
};

export default reportWebVitals;
