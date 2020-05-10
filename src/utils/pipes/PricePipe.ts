const PricePipe = (value: number | undefined): string => {
    if(!value) return '';
    const stringValue = value.toFixed(2).toString();
    return `${stringValue} €`
};

export default PricePipe;
