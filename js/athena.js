window.dataLayer = window.dataLayer || [];

$(document).ready(function () {
    $(".btn-open-alert-popup").click(function (e) {
        alert('It works!');

        const className = e.currentTarget.className;

        dataLayer.push({
            event: 'alert_click_btn',
            btn_class: className
        });
    });

    $(".btn-purchase-KRW-A").click(function () {
        alert('It works!');

        const value = 1000;
        const transaction_id = "T" + getCurrentTime();
        const item_tee_KRW_1 = {
            "item_id": "SKU_12345",
            "item_name": "Stan and Friends Tee",
            "affiliation": "Google Merchandise Store",
            "coupon": "SUMMER_FUN",
            "discount": 1000,
            "index": 0,
            "item_brand": "Google",
            "item_category": "Apparel",
            "item_category2": "Adult",
            "item_category3": "Shirts",
            "item_category4": "Crew",
            "item_category5": "Short sleeve",
            "item_list_id": "related_products",
            "item_list_name": "Related Products",
            "item_variant": "green",
            "location_id": "ChIJIQBpAG2ahYAR_6128GcTUEo",
            "price": 10000,
            "quantity": 1
        }

        dataLayer.push({ ecommerce: null });
        dataLayer.push({
            event: 'purchase',
            ecommerce: {
                transaction_id: transaction_id,
                value: value,
                tax: 10,
                shipping: 1000,
                currency: "KRW",
                coupon: "SUMMER_SALE",
                items: [item_tee_KRW_1]
            }
        });
    });

    function getCurrentTime(){
        var today = new Date();
        today.setHours(today.getHours() + 9);

        return today.toISOString().replaceAll('-','').replaceAll(':','').replaceAll('.','');
    }
});