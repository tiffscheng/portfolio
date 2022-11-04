var $divs = $j("div.emp-card");
$j(document).ready(function () {
    var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
        return $j(a).find("h4").text() > $j(b).find("h4").text() ? 1 : ($j(a).find("h4").text() < $j(b).find("h4").text() ? -1 : 0);
    });
    $j("#employees").html(alphabeticallyOrderedDivs);
    $j('a.category').on('click', function (e) {
        e.preventDefault();
        $j('a.category').removeClass('selectedCat');
        $j(this).addClass('selectedCat');
        var keyword = $j(this).attr('data-category');
        sortCards(keyword);
    });
});
function sortCards(clickedKeyword) {
    $j('.emp-card').each(function () {
        var cardKeyword = $j(this).attr('data-category');
        if (clickedKeyword == 'all') {
            $j(this).addClass('show').removeClass('hidden');
        }
        else {
            if (cardKeyword == clickedKeyword || cardKeyword == 'monkey') {
                $j(this).addClass('show').removeClass('hidden');
            }
            else {
                $j(this).addClass('hidden').removeClass('show');
            }
        }
    });
}