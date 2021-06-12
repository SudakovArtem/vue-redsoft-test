import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state() {
        return {
            galleryItems: JSON.parse(localStorage.getItem('gallery-items')),
            mainNavLinks: [
                {text: 'Каталог', href: '#'},
                {text: 'Доставка', href: '#'},
                {text: 'Оплата', href: '#'},
                {text: 'Контакты', href: '#'},
                {text: 'О галерее', href: '#'},
            ],
            loading: false
        }
    },
    mutations: {
        loadGallery(state) {
            if (localStorage.getItem('gallery-items')) {
                return
            }
            localStorage.setItem('gallery-items', JSON.stringify([
                {
                    id: 'gallery-img1',
                    title: '«Рождение Венеры» Сандро Боттичелли',
                    price: '1 000 000 $',
                    oldPrice: '2 000 000 $',
                    imgSrc: 'gallery-img1',
                    inCart: false,
                    sold: false,
                    loading: false
                },
                {
                    id: 'gallery-img2',
                    title: '«Тайная вечеря»  Леонардо да Винчи',
                    price: '3 000 000 $',
                    oldPrice: null,
                    imgSrc: 'gallery-img2',
                    inCart: false,
                    sold: false,
                    loading: false
                },
                {
                    id: 'gallery-img3',
                    title: '«Сотворение Адама» Микеланджело',
                    price: '5 000 000 $',
                    oldPrice: '6 000 000 $',
                    imgSrc: 'gallery-img3',
                    inCart: true,
                    sold: false,
                    loading: false
                },
                {
                    id: 'gallery-img4',
                    title: '«Урок анатомии»  Рембрандт',
                    price: null,
                    oldPrice: null,
                    imgSrc: 'gallery-img4',
                    inCart: false,
                    sold: true,
                    loading: false
                },
            ]))
            state.galleryItems = JSON.parse(localStorage.getItem('gallery-items'))
            localStorage.setItem('gallery-items', JSON.stringify(state.galleryItems))
        },
    },
    actions: {
        async loadPeople(context, id) {
            const item = context.state.galleryItems.find(item => item.id === id)
            item.loading = true
            try {
                await axios.get('https://jsonplaceholder.typicode.com/posts/1')
                item.inCart = true
                item.loading = false
                localStorage.setItem('gallery-items', JSON.stringify(context.state.galleryItems))
            } catch (e) {
                item.loading = false
                console.error(e.message)
            }
        },
    },
    getters: {
        galleryItems(state) {
            return state.galleryItems
        },
        mainNavLinks(state) {
            return state.mainNavLinks
        },
    }
})
