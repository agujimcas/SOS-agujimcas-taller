export function getHireds(req, res) {
    res.send([{
        "year": 2011,
        "province": "Sevilla",
    }]);
}

export function findByyear(req, res) {
    res.send({
        "year": 2011,
        "province": "Sevilla",
    });
}
