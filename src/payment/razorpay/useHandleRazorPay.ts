 /*script function */
 function loadScript(src: any) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
} 


// razorpay starts
async function displayRazorpay() {
   
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

     /*if razorpay fails to load */
        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }


        // first you get order id  then it is starts

        const options = {
            key: 'razorpay_key',
            currency: '',
            name: '',
            description: 'Thank you',
            subscription_id: '',
            handler: async function (response: any) {
               
            },
            prefill: {
                name: '',
                email: '',
                contact: ''
            },
            modal: {
                ondismiss: function () {
                   
                }
            }
        };

        const _window = window as any;
        const paymentObject = new _window.Razorpay(options);
        paymentObject.open();

}