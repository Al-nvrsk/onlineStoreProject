import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            // {id: 1, name: 'refregerators'},
            // {id: 2, name: 'smartphones'},
            // {id: 3, name: 'TV'},
            // {id: 4, name: 'smartphones'},
            // {id: 5, name: 'Washer machine'},
        ]
        
        this._brands = [
            // {id: 1, name: 'samsung'},
            // {id: 2, name: 'Apple'},
            // {id: 3, name: 'Sony'},
            // {id: 4, name: 'Samsung'},
            // {id: 5, name: 'Hier'},

            
        ]
        this._devices = [
            // {id: 1, name: "Iphone 12 pro", price: 2500, rating: 4, img: 'https://vectorified.com/images/tracfone-icon-5.jpg'},
            // {id: 2, name: "Experia 5", price:1500, rating: 5, img: 'https://i.pinimg.com/originals/87/b5/03/87b50332946770f994dc01f1566d930e.gif'},
            // {id: 3, name: "Iphone 13 pro", price: 2500, rating: 4, img: 'https://vectorified.com/images/tracfone-icon-5.jpg'},
            // {id: 4, name: "Experia 6", price:1500, rating: 5, img: 'https://i.pinimg.com/originals/87/b5/03/87b50332946770f994dc01f1566d930e.gif'},
            // {id: 5, name: "Iphone 14 pro", price: 2500, rating: 4, img: 'https://vectorified.com/images/tracfone-icon-5.jpg'},
            // {id: 6, name: "Experia 7", price:1500, rating: 5, img: 'https://i.pinimg.com/originals/87/b5/03/87b50332946770f994dc01f1566d930e.gif'}
        ]
        
        this._selectedType = {}

        this._selectedBrand = {}

        this._page = 1
        this._totalCount = 0
        this._limit = 3

        this._sitePage = 'Main'

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setLimit(limit) {
        this._limit = limit
    }

    setSitePage(value) {
        this._sitePage = value
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }

    get totalCount() {
        return this._totalCount
    }
    get sitePage() {
        return this._sitePage
    }
}