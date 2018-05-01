$(document).ready(function () {
    setClickerForPizzas()
    var counts = 0
    function setClickerForPizzas() {
        $(".buy-button-small").click(function () {
            counts++
            var pizza= '<div class="order-one ng-scope">\n' +
                '                        <img class="img-aside pizza-icon" alt="Піца" src="images/pizza_2.jpg">\n' +
                '                        <p class="bold mb10 ng-scope">\n' +
                '                            <span class="order-title">BBQ (Мала)</span>\n' +
                '                        </p>\n' +
                '                        <div class="order-text">\n' +
                '                            <img class="diagonal-image" src="images/size-icon.svg">\n' +
                '                            <span class="diagonal">30</span>\n' +
                '                            <img class="gram-image" src="images/weight.svg">\n' +
                '                            <span class="gram">460</span>\n' +
                '                        </div>\n' +
                '                        <div class="price-box">\n' +
                '                            <span class="price">139грн</span>\n' +
                '                            <a class="minus btn btn-xs btn-danger btn-circle" href="#">\n' +
                '                                <i class="glyphicon glyphicon-minus icon-white">\n' +
                '                                </i>\n' +
                '                            </a>\n' +
                '                            <span class="label order-pizza-count" style="color:black;">1</span>\n' +
                '                            <a class="plus btn btn-xs btn-success btn-circle" href="#">\n' +
                '                                <i class="glyphicon glyphicon-plus icon-white">\n' +
                '\n' +
                '                                </i>\n' +
                '                            </a>\n' +
                '                            <a class="count-clear btn btn-xs btn-default btn-circle" href="#">\n' +
                '                                <i class="glyphicon glyphicon-remove icon-white">\n' +
                '\n' +
                '                                </i>\n' +
                '                            </a>\n' +
                '                        </div>\n' +
                '                    </div>'
            $(".list-body").append(pizza)
            $("#counter").text(counts)
        })
        $("#clean_order").click(function () {
            $("#counter").text("0")
            $(".list-body").removeAll()
        })

    }
})