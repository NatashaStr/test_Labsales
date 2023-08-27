const initMap = () => {
    const map = L.map('map', {
        center: [44.989968, 38.934117],
        zoom: 16
    });
    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
    ).addTo(map);

    const mainIcon = L.icon({
        iconUrl: '../../img/svg/pin-main.svg',
    });

    const iconBank = L.icon({
        iconUrl: '../../img/svg/pin-bank.svg',
    });

    const iconKinder = L.icon({
        iconUrl: '../../img/svg/pin-kindergarden.svg',
    });

    const iconCafe = L.icon({
        iconUrl: '../../img/svg/pin-cafe.svg',
    });

    const iconPharma = L.icon({
        iconUrl: '../../img/svg/pin-pharma.svg',
    });

    const iconShop = L.icon({
        iconUrl: '../../img/svg/pin-shop.svg',
    });

    const iconPool = L.icon({
        iconUrl: '../../img/svg/pin-swimming-pool.svg',
    });

    const iconPharmaWhite = L.icon({
        iconUrl: '../../img/svg/pin-white-pharma.svg',
    });

    const iconShopWhite = L.icon({
        iconUrl: '../../img/svg/pin-white-shop.svg',
    });

    L.marker([44.989968, 38.926517],
        {
            icon: mainIcon,
        }
    ).addTo(map);

    L.marker([44.987868, 38.931517],
        {
            icon: iconBank
        }
    ).addTo(map);

    L.marker([44.986868, 38.930517],
        {
            icon: iconKinder
        }
    ).addTo(map);

    L.marker([44.986268, 38.932517],
        {
            icon: iconCafe
        }
    ).addTo(map);

    L.marker([44.990268, 38.936517],
        {
            icon: iconPharma
        }
    ).addTo(map);

    L.marker([44.991268, 38.930517],
        {
            icon: iconShop
        }
    ).addTo(map);

    L.marker([44.993268, 38.925517],
        {
            icon: iconPool
        }
    ).addTo(map);

    L.marker([44.992868, 38.935517],
        {
            icon: iconPharmaWhite
        }
    ).addTo(map);

    L.marker([44.987868, 38.934517],
        {
            icon: iconShopWhite
        }
    ).addTo(map);

}

export { initMap }