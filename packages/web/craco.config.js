const webpack = require("webpack");
const { getWebpackTools } = require("react-native-monorepo-tools");

const monorepoWebpackTools = getWebpackTools();

module.exports = {
    webpack: {
        configure: (webpackConfig) => ({
            ...webpackConfig,
            module: {
                ...webpackConfig.module,
                rules: webpackConfig.module.rules.map((rule) => {
                    if (!rule.oneOf) return rule;
                    return {
                        ...rule,
                        oneOf: rule.oneOf.map((ruleObject) => {
                            if (
                                !new RegExp(ruleObject.test).test('.ts') ||
                                !ruleObject.include
                            )
                                return ruleObject;
                            return { ...ruleObject, include: undefined };
                        }),
                    };
                }),
            },
        }),
        plugins: [
            // Inject the "__DEV__" global variable.
            new webpack.DefinePlugin({
                __DEV__: process.env.NODE_ENV !== "production",
            })
        ],
    },
};