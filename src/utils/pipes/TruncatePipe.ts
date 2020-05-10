const TruncatePipe = (value: string | undefined, limit: number): string => {
    if(!value) return '';

    if(value.length > limit) {
        const truncateValue: string = value.slice(0, limit);
        return `${truncateValue} ...`;
    } else {
        return value;
    }

};

export default TruncatePipe;