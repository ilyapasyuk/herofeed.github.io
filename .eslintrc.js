module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        'airbnb',
        'react'
    ],
    rules: {
        'arrow-body-style': ['off'],
        'arrow-parens': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'func-names': ['off'],
        'global-require': ['off'],
        'indent': ['error', 4, {
            SwitchCase: 1
        }],
        'max-len': ['off'],
        'no-param-reassign': ['error', {
            props: true
        }],
        'object-curly-spacing': ['off'],
        'padded-blocks': ['off'],
        'space-before-function-paren': ['error', 'never']
    }
};
