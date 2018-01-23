import * as React from "react";

export const CurrencyFormatter = ({ locale, value, isPrecisionSuperSet, Format }) => {
    
    let precisionValue = 0;
    let numFormatter = new Intl.NumberFormat(locale, {
        style: 'decimal',
        maximumFractionDigits: 1
    });
    if (isPrecisionSuperSet) {
        precisionValue = value.split(".")[1];
        value = value.split(".")[0];
    }

    const currencyformat = (precisionValue) => {
        switch (locale) {
            case "fr":
                return (
                    <span>
                        {/* <FormattedNumber style="decimal" value={value} maximumFractionDigits={4} /> */}
                        {numFormatter.format(value)}
                        {
                            isPrecisionSuperSet
                                ?
                                (<sup>. {precisionValue}$/
                                    <span>{Format}</span>
                                </sup>)
                                :
                                (<span>$/
                                    <span>{Format}</span>
                                </span>)
                        }
                    </span>);

            default:
                return (
                    <span>
                        {isPrecisionSuperSet ? (<sup>$</sup>) : ("$")}
                        {numFormatter.format(value)}
                        {/* <FormattedNumber style="decimal" value={value} maximumFractionDigits={4} /> */}
                        {/* {defaultLocale()} */}
                        {
                            isPrecisionSuperSet
                                ?
                                (<sup>. {precisionValue}/
                                    <span>{Format}</span>
                                </sup>)
                                :
                                (<span>/
                                    <span>{Format}</span>
                                </span>)
                        }
                    </span>
                );
        }

    };
    return currencyformat(precisionValue);
};
