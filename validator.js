function Validator(options) {
    var selectorRule = [];

    const formElement = document.querySelector(options.form);

    // lay ra the cha ngoai cung cua input element
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }

            element = element.parentElement;
        }
    }

    // ham thuc hien hien loi va bo loi
    function validate(inputElement, rule) {
        var errorMessage;
        const errorElement = getParent(inputElement, options.formModalItems).querySelector('.modal-message');

        //lay ra cac rule cua cac selector
        var rules = selectorRule[rule.selector];

        // neu co loi dung viec kiem tra
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            errorElement.style.color = 'red';
            inputElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.classList.remove('invalid');
        }

        return !errorMessage;
    }

    // lay cac element cua form khi can validator
    if (formElement) {
        formElement.onsubmit = (e) => {
            var isFormvalid = true;

            e.preventDefault();

            // thuc hien loc qua tung rule va validator
            options.rules.forEach((rule) => {
                const inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);

                if (!isValid) {
                    isFormvalid = false;
                }
            });

            if (isFormvalid) {
                //truong hop khi co onSubmit
                if (typeof options.onSubmit === 'function') {
                    const enableInputs = formElement.querySelectorAll('[name])');

                    const formValues = Array.from(enableInputs).reduce(function (values, input) {
                        values[input.name] = input.value;
                        return values;
                    }, {});

                    options.onSubmit(formValues);
                }
                // truong hop voi hanh vi mac dinh
                else {
                    formElement.submit();
                    window.location.href = options.htmlMain;
                }
            }
        };

        options.rules.forEach((rule) => {
            const inputElement = formElement.querySelector(rule.selector);

            // luu lai cac rule cua moi input
            if (Array.isArray(selectorRule[rule.selector])) {
                selectorRule[rule.selector].push(rule.test);
            } else {
                selectorRule[rule.selector] = [rule.test];
            }

            if (inputElement) {
                // xu li khi blur khoi input
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                };

                //xu li khi nguoi dung nhap vao input
                inputElement.oninput = (e) => {
                    if (e.target.value) {
                        const errorElement = getParent(inputElement, options.formModalItems).querySelector(
                            '.modal-message',
                        );

                        errorElement.innerText = '';
                        inputElement.classList.remove('invalid');
                    }
                };
            }
        });
    }
}

// dinh nghia cac rules
//1. khi co loi => tra ra message loi
//2. khi hop le => khong tra ra cai gi (undefined)
Validator.isRequired = function (selector) {
    return {
        selector,
        test: function (value) {
            return value.trim() ? undefined : 'Please enter this field';
        },
    };
};

Validator.isEmail = function (selector, message) {
    return {
        selector,
        test: function (value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            return regex.test(value) ? undefined : message || 'Invalid Email';
        },
    };
};

Validator.minLength = function (selector, min, message) {
    return {
        selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Please enter ${min} characters`;
        },
    };
};

Validator.isDate = function (selector, message) {
    return {
        selector,
        test: function (value) {
            return value ? undefined : message || 'Your date is invalid';
        },
    };
};

Validator.isConfirmed = function (selector, getConfirmedValue, message) {
    return {
        selector,
        test: function (value) {
            return value === getConfirmedValue() ? undefined : message || 'value is not define';
        },
    };
};
