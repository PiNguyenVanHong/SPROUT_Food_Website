export const formatNumber = (value: number, isIcon: boolean) => {
    let newCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

    if(!isIcon)
        return newCurrency.replace("$", "");
    return newCurrency.replace("$", "$ ");
};

export const formatWeight = (value: number, unit: 'g' | 'kg' | 'lb' = 'g') => {
    let formattedWeight = value;
    let unitLabel = unit;

    // Nếu đơn vị là gram và giá trị >= 1000, chuyển sang kg
    if (unit === 'g' && value >= 1000) {
        formattedWeight = value / 1000;  // Chuyển sang kg
        unitLabel = 'kg';
    }

    // Nếu đơn vị là pound (lb), chuyển từ gram hoặc kg sang lb
    if (unit === 'lb') {
        if (value < 1000) {
            formattedWeight = value * 0.00220462;  // Chuyển từ gram sang pound
        } else {
            formattedWeight = (value / 1000) * 2.20462;  // Chuyển từ kg sang pound
        }
        unitLabel = 'lb';
    }

    // Định dạng số với 2 chữ số thập phân
    const formattedNumber = new Intl.NumberFormat('en-US', {
        style: 'decimal',
    }).format(formattedWeight);

    return `${formattedNumber}${unitLabel}`;
};
