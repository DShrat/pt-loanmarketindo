"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp, MenuIcon, X } from 'lucide-react';
import { useRouter } from "next/navigation";

export function Sidebar(){
    const [productShow, setProductShow] = useState<boolean>(false);
    const [whatappsShow, setWhatappsShow] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(true);


    const router = useRouter();

    const handleProduct = () => {
        setProductShow(!productShow);
    }
    const handleWhatapps = () => {
        setWhatappsShow(!whatappsShow);
    }

    const handleDashboard = () => {
        router.push('/');
    }
    const handleBankProduct = () => {
        router.push('/bank-product/');
    }

    return(
        // <main className="capitalize bg-white">
        <main className={`fixed cursor-pointer top-0 left-0 h-full bg-white text-black transition-all duration-300 ${
            isOpen ? 'w-auto lg:relative' : 'w-0'
          } overflow-hidden shadow-xl`}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 p-2 rounded-lg bg-white hover:bg-gray-700 transition-colors"
            >
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

            <section className="" >
                <ul>
                    <li className="flex justify-center">
                        <svg width="90" height="90" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="110" height="110" fill="url(#pattern0_6825_69)"/>
                            <defs>
                            <pattern id="pattern0_6825_69" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_69" transform="scale(0.00520833)"/>
                            </pattern>
                            <image id="image0_6825_69" width="192" height="192" xlinkHref="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                    </li>
                    <li className="item-sidebar" onClick={()=>{handleDashboard()}}>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                        </div>
                        <p>Dashboard</p>
                    </li>
                    <li className="item-sidebar">
                        <svg width="24" height="24" viewBox="0 0 35 35" fill="url(#pattern0_6825_78)" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="35" height="35" fill="url(#pattern0_6825_75)"/>
                            <defs>
                            <pattern id="pattern0_6825_75" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_75" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6825_75" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nO2WS0oDQRCGPxfJxlxAzRF0qd5AN+JKvIOYW0jAnXoIyQHiGUwWPnClC4noPhB8r2wZmAEpkknGycxkOv8HBYHqTlf9U1XdIIQQQgghRIQryGYGJwFQBTi1AJn35sy2mstpOEkAVAHMdQvkhQRAFYBagBxmQBVoAF3gPbQOcBj6vG6BZeAmZvJeA0t4KkB1TPKRXQEVPBSgkeAOPsBDAbpmfRtYCa1tfJf/OD/tQydzAd7M+iDxiLrxvfoowMCsr8cIMPBRgM6IFgiSv5iHFmgkCC54E+RN5gJUgLsJkr/19RokLPd+TPJ9Mxy9EmAbeJigAu6BLTwSYAFoAj8JZkCw9siXIXicIshm2QXYHfLlv4ATYANYDC34fRr6bCXslFWAKvBk1jwDqzH/uQa8mD29EbfCzAuwP+TLxyX/V4Rvs3eP7Jm6AC3jD8p+Us7M3nNKKEDP+NcTBLNp9j5SQgE+jb+WIJia2ftB9mRyC5QJCYAqALUAU5wBLuFDZNoU/hBy8yaA88wkwDic5yYB0uLSKlzy8yk6gKLPF0IIIYQQ+MAvHN5JvPngnXcAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        <p>contact</p>
                    </li>
                    <li className="item-sidebar">
                        <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="35" height="35" fill="url(#pattern0_6825_78)"/>
                            <defs>
                            <pattern id="pattern0_6825_78" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_78" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6825_78" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5klEQVR4nO2XsQ7CMBDF/KcIJv5/ReUxsUAFdMjlRGzphi5tZaV1AiIiIkdI0dyAEwsLCHAHriwsIB0lZHUJeZnR928nIZMEtJGQYgHbzvVlwHPbCjjvSJi6ElIsgG4SMkFAKwmZJKCNhEwU0EJCJmbw02xVZ4c0FfA8QC0tIAPe5w0FUGz8C3+3Ao6iAFwB+AngPwB/glgBzCAFxH0AboTiThC3wvEsgIehVGSnW5ViBbACsQJYgVgBrEAqstOtSrECWIFYAaxArABWIBXZ6ValWAGsQBpP+SeQZqOA0aT5iIiI8BsPPUHKTNrjO40AAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        <p>loan</p>
                    </li>
                    <li className="item-sidebar" onClick={()=>{handleProduct()}}>
                        <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="35" height="35" fill="url(#pattern0_6825_81)"/>
                            <defs>
                            <pattern id="pattern0_6825_81" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_81" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6825_81" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiklEQVR4nO2ZPUhcURCFDwHxtxVjLWqZSNSkE7XWKLETtBZMLbit0bQxsLYi2lpoa6GthbEzCcbKwhiraLFJ4crAK5aDuvvYnbnzHveDgWX3Dmdm3t99Z4FIJBKJRKxoAjADYBvAGYA7ALfJZ/nuQ7Iml7wH8BNAuUrImknkiBcA1mpovDLuAawmuZlnLWXzlfEJOTjt76mpEoAvAN4CaE9CPq8nv/GZMIGM0vTINX8J4NUzOa+TNZU5P7J6Y5x55Mg/13zlEPhMkKdD5timJuS0r5WvlLuFDPKdmhhOkfuOcmWfkDluqYmOFLkdlPsXGaRMYZ0fnHJeB/C7jo2NdlxZDKDkoNGnQmpTpdVBk9WiRXMAXQ4arBZSoxp9JCbP+qfgwtJSaz7vN3qhyCCJHTsYwDGtewNFxkjswMEADmjdKBSZIrFdBwPYpXXyCq7GPIltOhjAJq2bgyIfSUxMjNADWKd1i1CkQGIrCM8K1bSsKfaZxJYQniWqSWpUY4PEFhCeBaqpqCm2Q2KzCM8s1SROlBr7JObBsZ2gmvY0xY5IbAThGaGaDjXFTklsAOEZoJq+aYpdkFgPwtNDNf3SFLshsU6Ep5Nq+qMp9o/EmhGeZqpJajRxg0rwQ8nCFeoikWv44drCFeojkXP44dzCFRokkRP44cTCFRqz3HCk5NDCFZqy3HKmZM/CFZq3fOmo86/4OQs3qAg/FC1coYKl8VCnUbNsIVKAH0wOzgaJyCXhBZPLc4dE5KboBZMb9D6JTMMP0xaP6CMSGYcfxi02aackMgQ/DFm4Qhck0g8/9Fu4Qjck4jlUXKH/DhqrNaTWhtLmoKm0IQ5Ww+h20FDaeNnIAUQikUgEOeQBspTxWoBzYGEAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        <p>product</p>
                        <div className="grid justify-end">
                            {productShow ?(
                                <ChevronUp />    
                            ):(
                                <ChevronDown />
                            )}
                        </div>
                    </li>
                    {productShow && (
                        <div>
                            <li className="item-sidebar" onClick={()=>{handleBankProduct()}}>
                                <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                </svg>
                                <p>bank product</p>
                            </li>  
                            <li className="item-sidebar">
                                <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                </svg>
                                <p>product</p>
                            </li>  
                            <li className="item-sidebar">
                                <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                </svg>
                                <p>category product</p>
                            </li>  
                        </div>
                        
                    )}
                    <li className="item-sidebar">
                        <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="35" height="35" fill="url(#pattern0_6825_87)"/>
                            <defs>
                            <pattern id="pattern0_6825_87" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_87" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6825_87" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVR4nO2ZvU4VQRTHf7qKxS2w0vjRQcUz8AqWFn4EbYkkvIKFL8ArUFICHR3qhWvU2gafQBJEIDEhHrPJkJDJfs3uzM7Ocn7JqWZmz//87+6ZyVxQFEVRFCUSExM3jgfAe+AXcAJsAE+4ASyaYi8AseIvsAksMUKWgS3gsqBwO/4Be8AzEue2KWLaoOiy+A6sAHdIiAmwBhzVFHdk5rnMnaTS2KQivhX8qldvy+eatb+H2DAXKxpbm++6Sb8YRMNcDix0wbOxvTa2E4+vatNPK2jDvGce/qNGxE9gPVCziqbhA3Bck3QGPAcywpOZXLMaTcdGe2dkKN9fyz7UGQnUgX0KrdqJOiNWPPTx0BBCjbbgBkjDqNpJXhXMf2nG+tIRxYD7NVvoJzNnlAZkwEGDddOS3SR5A946rF0ZkgFluCb6Ys3fBh6b0+KONXbY4Hm9FepLgL1FXT8mP7XGzsdowGmFAX3k9444Cji05u90NCE5A96VNKkzszvk43MB83tHHAXMmdugqo6djz8KlN870kJAXtzXGhPy8buB8ntFWgrIi1s1939/SkxYDZjfG+JJQNE5YNpj/tb4FGCfA057zt8KVwHnDgehswD5vSOOAmYl54C8+F1r7CBAfu+Io4A3Nd3/erwOkN874igga/DPz9WdQDZGA3LmgY8Vxe+bOYzVgJxb5vrLXv/CjDF2A4ayvjOxC0jegNTzE1tA7PzEFhA7P7EF9J5fEgs1wDeSWKgBvpDEQw3oiiQeaoCiKIqiKAoF/AdRlQO05cF5UwAAAABJRU5ErkJggg=="/>
                            </defs>
                        </svg>
                        <p>bank</p>
                    </li>
                    <li className="item-sidebar">
                        <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="35" height="35" fill="url(#pattern0_6825_90)"/>
                            <defs>
                            <pattern id="pattern0_6825_90" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_90" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6825_90" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEdElEQVR4nO2aW4hWVRSAP0fRyBHGgdLKl1LsgjbTnSiw7Ab51I3phkThdCHoqctbhV00kyTEHrvYU/nSS1k2SBcRuz0FPaRZTaSZDVEKTTNpLFg/nBbr/Ofs/+xz/t/YH2yYOefstdZe/95rr73OgUQikUgkEol6ORu4H3gFGAP2AhPA39om9Jrc26LPLuUE53xgIzAOHO+w/Qi8qLJOCGYAq4BdFQad1z4FblQdPclFwJ4aBm7bbuBCeoiTgE3AdBuj/wLeBZ4BbgeGnWeG9Z488x4w2Uae6HoJmNPtwS8Bvsox8pgOZDUw4PS1z1sGtO/2No74ElhMl7gE+DXHsB3ApQX9ixyQRYLgWzm6ZAe5goa5HjiSE7VXlpQR4oAW16gO21dsuY6GuBw46hjxNjA/QM4608oyCGzLccJlNLDmf8tZ7yM0x4jqtHbIkjyrLqVzNOi0i8x3Uz+3AVNt7Pi8rt1hU84vn/1/quaZMOIM3psJkj1GT3KmnTXvGbSzpmxthsr2HL7NuT4cU/EeJ9q3Al7WCZ8A/dRHv+qws23QOXNI6hyFVc4Uu9o8M6K/Tp2Db9GvuuxSu9ax84YYCncZoZLSenjTfn1NMSFvib1vbP24qqJljleLMrwWzzW8OwgXO0FxeRWBG40wycvLsL7h3SHLB0b3C1WEjRthcjgpg7c7NOWEe4ze76uUsY5n2mRgqnur44QmlsOAc5SWDDaYB0oGv05mwsvAZ8AfmsNL9vYYMJc42GA42omQLUbI2g6N8ZyQ1/ZFKoa2AnCrbe5EyJgRckcFg0KcINXheVTjTqc+Ecx+I2SoolGjJR0g7fGKuoacmRXM4QIjNwTKs1vjVuAUbVvNvS8CZW8osFWOycFMRnbAQdN/QebeQnNPAmNMB0hRtusOOGr6y6B72gGHIzvAFlNk2p+q7U1zT7bFri+BfUaInAuq8ERAEJScoArLnZ0lmA+NkJsqGjVPDSmzDVY9Vt9sZMr5IJjNRsizVEfS6+8KBh8jEXreyJXMM5g1RojUBWIwV6e4pMJ/ajosFadHgZMj6dhtbL+3EyGLjZBj3XwNFcASpyZwZqfC9htBT9L7PB0jAOatJdkZ+uhdZjoxplLsWuoEqvvoXbzzxjlVhY4ZgT8HblOzgAuAh4DXtFz9g77V/UfbhF6TkverwINa15e+IdvswRinQMtKx6tF02pQf40dOW+Ry7YjKmNNiWrUOqf/CiKx0wiect4NzNQy2DslzhGdtEmVfYvqsq/Np+v49Vucp5+zZRX8AiwCZmux9JsaBp3XJNA9op/nnAYccJx1LpFZ6xjydcnP4GQrel3rjCt0X56vO0qf/i3XrtJn3iiZNo+rDfb6U9TArMx7uaI2rd8H3WWOvaEsVBnbCz7CyraPAoNnEIt0F8hT/q2muacTnzO0VNZuZvxUk+7/sEy3Lfu2eLROz2fo048krCN+j1C3LM2VepA5BDysgbBpZqvuQ2qL2NQoQznf/zXNQJO/fCKRSCQSiUSC/wn/Alw8LXpd6yEQAAAAAElFTkSuQmCC"/>
                            </defs>
                        </svg>
                        <p>credit scoring</p>
                    </li>
                    <li className="item-sidebar">
                        <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="35" height="35" fill="url(#pattern0_6825_93)"/>
                            <defs>
                            <pattern id="pattern0_6825_93" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_93" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6825_93" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEKElEQVR4nO2ay2uUVxTAf9JOuqrvNPWx8bXw1f4F3daKRKnU11InEK2CWrR22UVV2mKM+A8oiv+BVnTt+wHis9WFumpr0KSm0MTUyIEzMhzOl+TO3PvNF/h+cGGYmXvuue/zuFBSUlJSUlJSkpYOYDPQC5wHfgdeAkNaXup38ttRYJPWmdTMBHYB14DRBspb4CqwU2VNGuYCPcBggx33isg6AsyhwHwI7Ab+idhxW/4FfgTaKBhLgNtjKD4CXAJ+AtYDy4AZQEWLfF6uvx0ELmudLHm3gMUUhHXAQIaiT4F9ui1CkTr7gWcZsqXNTlpMV8ZM/QlUdXabpaLt/OW080bbaQldelJbpU4C0xO0J9vkVMZtUW3Fsh8xish9vjWngR92VkJnngfegHNNfZmXAsAq55rtBxalbrjinPZDOXe+fhDsSrip13Ey9jt7MI9lP9Z2sPrsTdXYXGfZyYEXynK19++pvEH93KP2QSinjU5iiH1KAnqcq05O5oki1tvxcQwc+e1Y4PUpfsLfRs4vDfRv3Ebs7FcDO38xwOS9EDgI3ab+68DJGZddjoUXouDxBux+cZ1DBvi5qb+DiFw3wsW8DdnzdtnfB9YCH2sRu+KBc7cvDWjngKl/hUh0GItvJNC2P+p0fqrzv2nAQ/NfcYEnyjzgf2MhthOBzUYp8epCuG/qy2xn8bX5793Atq6a+huJQK8RKi5tCDY+IEs+i6nOlRbCYVNfbq6mOW+Eyiylot05zUP4xtQ/G0OpJ0ZoI8bKRNlm2roTWH+Fqf9HDKX6jNBUAcrPgRemrV8DZcw29UVe0wwZobHjcV8AJxzH5j9gQaCsjxwZhR2AD9SXyDKEfmhAZpIB6Eu0Bb4bo/PiD0xpQGaSLfDYCBXLLgaPnI6Lib2lCZkrUxyCvxmhErqOwRsj9yvdFs2Q5BrsNUIlbh8DO/sxSGIIbTJCJWlR1AGwecgNMYR+YpwhcTjmUzzmGa8zmjPkORkSGywaBxKtVDcg8jyCPRBzC1T0BqmXt53EIbGuAg3AdseLjBoS84KiYiDNovUD4AVFfyYBc9Q9rW9IcnWtHoAzRs5Ayuc1+xzFm90KzWCjwVL2pGywoo8T6hsc1jRV3qx2PMjrqVNj6MsMLzm6KufO20P5FbAwLwU6HVt+OKft0J2RHl9DzlQzHkicThQ1muUceDWLr2UJ2qqzEkb1WuqOFDxp03vehstqM9/K7PT77dDvKFezGL9XOz2U+Wre2pRXrfS3YtlnIS8zbmQoWnOgxJ84pD77St0mbVrk82f622H16uqzPKPOaZ/bgRf6UDLryVyMMljUh5L1dGg421qNzZTXmvMX13zSMAP4VrO03m0xXnmrLu2OFI5N3rRrolIcqnMaEO2rey7fp9+d04zwhpjBjJKSkpKSkpISHN4B53GyAcoQduIAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        <p>faq&#39;s</p>
                    </li>
                    <li className="item-sidebar">
                        <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="35" height="35" fill="url(#pattern0_6825_103)"/>
                            <defs>
                            <pattern id="pattern0_6825_103" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_103" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6825_103" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhUlEQVR4nO2awU7CQBCGv1NrwAcBkhJ8DB/AiyeNic/iGeLBZ/HGATjwKCr4AuJlSBozJrulLaX7f8mkSdMu3Z2d3X+HASGEEEIIIcQZyMySowAWwJfZwu71mhy4A96BH+Dg2BZ4Bob0iBHwAnz802nPvoE3YEaPvX0ItIuaFYXF8y6gYxvgyWwT8Pyuq2tFHuHt49S+cdoZW6h8XsqsGEXE9vGDrwPavSoNaOfWirwmb4cyrjDIjcyKCTAPjO0V8AAMavz9gbW5Clwr5vbNJ5FV8Paso6FXyRlZ6gNA6iHgkewi6JHkNuiRrBCqEp+nSOGm15lWTnl1W+shMIjw9h54BW7tuo/oWJV3G50Vk4htcA08OvE5tPvrht6tfRvMgXtgGXFUnbaQEptGHLmX1oe8rQEoWkiKFm0NQBkpQUNKsISUoCEliJQgUoJICSIliJQgUoIoJ8jfs7pygignSK9zgqT+97hHsgUSHkmWyHgkWyTlkWSZnEeyhZJCCCGEEEJwXn4B3wJd1L1RkvQAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        <p>pipeline</p>
                    </li>
                    <li className="item-sidebar">
                        <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="35" height="35" fill="url(#pattern0_6825_103)"/>
                            <defs>
                            <pattern id="pattern0_6825_103" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_103" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6825_103" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhUlEQVR4nO2awU7CQBCGv1NrwAcBkhJ8DB/AiyeNic/iGeLBZ/HGATjwKCr4AuJlSBozJrulLaX7f8mkSdMu3Z2d3X+HASGEEEIIIcQZyMySowAWwJfZwu71mhy4A96BH+Dg2BZ4Bob0iBHwAnz802nPvoE3YEaPvX0ItIuaFYXF8y6gYxvgyWwT8Pyuq2tFHuHt49S+cdoZW6h8XsqsGEXE9vGDrwPavSoNaOfWirwmb4cyrjDIjcyKCTAPjO0V8AAMavz9gbW5Clwr5vbNJ5FV8Paso6FXyRlZ6gNA6iHgkewi6JHkNuiRrBCqEp+nSOGm15lWTnl1W+shMIjw9h54BW7tuo/oWJV3G50Vk4htcA08OvE5tPvrht6tfRvMgXtgGXFUnbaQEptGHLmX1oe8rQEoWkiKFm0NQBkpQUNKsISUoCEliJQgUoJICSIliJQgUoIoJ8jfs7pygignSK9zgqT+97hHsgUSHkmWyHgkWyTlkWSZnEeyhZJCCCGEEEJwXn4B3wJd1L1RkvQAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        <p>pipeline developer</p>
                    </li>
                    <li className="item-sidebar">
                        <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="35" height="35" fill="url(#pattern0_6825_104)"/>
                            <defs>
                            <pattern id="pattern0_6825_104" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_104" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6825_104" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtUlEQVR4nO2ZQWtTQRDHf2DxUgvmVKEeNYKt+RQq1pvxYvALeBBr9VYEwUOP+i0KEoqKfonejd4qqLe2YAu1GNSVhQmEYd/Ly3svj906fxgIyezOm/+bnZ2ZgMFgMBgMBoPBkAWXuFSGS1yMgKpwiUvtBMQOIwCLAOwIYLcAdg1idQBWCBHz/VozZv58zgjAIsDZEWDqM3Yb+FKiifFrVmM6oq6kga8VOrnvDTzfzA18q0CAX1sUHeAusAnsEBEBq8BuCef9mltEBBf5LTBzOCOAqCKg8RfijAAsAlxDIdcRqSsiuyJJHIEOsCeiSTgrleWLwPNsAT2gpdZ4x4ci3dgJ6IjjIxsjEuaB58B+gfrhJ/ASWBxzfvRbJRJcAwQ8DtjZK9lLHCvnkyDA4wHwp0L5nCXe+Tskcg3eD7y9kXyUSFmWozEvn9eBQY7zySRBjwsSwuP2fgEPgTNkw//2KEDeCdAmIQJeBZy/PsX6GwES3qZCQEsy+bgt/+anxZra4y9wOQUCeoEzr8P+ItAHjkS2A87NAZ/UXhspELCl7PiEp50/CDyP/25J6T5ROu9jJMBNkKtKv5+j+1rprhTYP3oCFpT+UY7uD6W7cBoJOPzfCFhW+ts5uv54NHYEXEm5NsHOB6XvK7xxtDOaIp8ELyndp0rHJ9jScDWJH13n4ZnSHwSuwSVJeIci/YDz/hr8rPbqxUDA5gQ7V6RoGV/jy9tpsa728MXVeSIgYKeArXdqzVDK26K4GSiF/YwgGbSlgdEkrEloZ2FO3rx2/lgGJMmgm9MOD6TC8xn+nMiKJDxd+tbaDsfgfBX5DdwjQeeHgdlAETmpeyTWBLKGmIuSxHSbHBJ/g7yR7rDWoWhTyBtjtySMdcc46vQ2Am1xbWPxJlHkjwxNQNX9ksM0BJxKOCOA6hHwD3YiWhOCGwC8AAAAAElFTkSuQmCC"/>
                            </defs>
                        </svg>
                        <p>marketing tools</p>
                    </li>
                    <li className="item-sidebar" onClick={()=>{handleWhatapps()}}>
                        <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="35" height="35" fill="url(#pattern0_6825_105)"/>
                            <defs>
                            <pattern id="pattern0_6825_105" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6825_105" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6825_105" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwUlEQVR4nO2aa6gVVRTHf7fsmtlTKxK7SUGFhFYmhBSWUWqmN/uSven2sqgoepj1QbAIS4MUyrKiMorKgsi6UfZOC7NIoxfaC3oYPalMsyxvrFgHLos1M2dm9p5zhfnBhvNhZv333mc/1mOgpqampqampiYuewBTgXnAs8AnwC/AZuAf/f0l8BKwEDgH2I9tnIHAucArwL9AT4H2PjADGMI2xO7ALOCngoP2mqyUe4AD6MO06dL9PuDAbfsbWADsTB9jb+CFjM6vBe4CuoAxwDA9G6QNBUYB04C5wKqMbSNnyEj6CEcC6xM6+jtwe8HOdgAzga8TbG8CzqLFTAT+SNizN+u/W5Z2YDrwo6OzFbiaFnE88JfTqZXAQRH0BgGPJKyGa6iYUbq8bUfmAztE1r5ID0O7Es6kwmvuC6cDVf4Lk4CNzpkwogrxJ5x/Xg6rqpnkrISPgQExRac4g19E65ju9Gd2LLF2Z+mvAXZMeWeIem/9Y3UKeNT06U9g/xhCFxghCWJGJzy7iwY9vZ2gWJMw2HG77w4tsh2wzoiIb57kEi91lqYERrG4xPFD9gkpcKwR2JKyzKYm3NXi3sbcnt8YvWtDCtxvjMtNkMRzKT580pYJwfVGa3Uow23Ad8b45JTnk+KCHp3IWHQ4AVSQpMohxujGlAOtnzpFSROwSRMlsXjH6AUJlrqM0RcznveCo0b7VvdrLOYZvTtCGL3FGJV4PY3XEgYvy7OTuJxuNJfFcH3Pz+kvNJocUrEZbTQ/D2F0mTEq7nAassd/diZgLPHZ12hKP0rzljE6rol3LnMmYHUFofJuRlOCpdK8YYxOaOKd7YE3nUmYQ1wGOXFBaZYao6c1+Z54ir+ad+WKPIN4DDN6kqEuzUPG6KU53j1JgybrRp+a8V4/HUxejnLyA6WZXTL+v8LZClvVrgRZHg/qcyt0EsUbbYbzjM7TBKDTyQHkZX7C1bjCSZlf6Ty3RreenC1pLDLv3UoAhjpLWA6bPLRpRSfJQXoSOEa3xpYUT/LDDO3Pcl7ZTbPWGL6YYswoUShttKTE5+HOHyXXYhBuMsbliivK5BL1w80pKbgFMdzgBiOczkh9r0wtcUlG5Og1SbMlpcU2mGfPJjDLjcDrgXz37ia3xacp8f1c8+wPwE4E5gSnU50Bkxk3aNXXakj57c6UOuNwp0QntqKw0gg9HEHjYOAUvfYmaiUqiXbNNfbuk2SvdiUSq3KGxrFZ6KyYaCXzwc5elaXbKmY6g+/O4TXmZloMP7sg1zk3iHxIsWdM0fuMoNy7VSMn+wPOP78hcsr9f74yohKkeFGcRGTHEZ4x6gp7ztF4IjPcuZoG6n47FLhKnZTezsjLwNEBtA8EFic4Tb9FmuzMkFaumsfV4chyYJZr7JBnfw7Qq/ApJ5/QaBL4HEZFdBf03W1w8h5wL3C53vPj9Vujk4ELgduAVzWVlWbrsZCBThb9M4odXvWnJ1ITd/hEKmZcRqekVPa8hrpHaNJign4jHGrg67RCFTur7DLHWcoSDt+oSYy0Dx9Gaij9UYFBr9ftMjamc9MM7wIfaFprin79UYQODZ5maaL1GT0g39Z64xItw3XprdNn2KvVHaipqampqakhBv8BsvoKs+BzaeEAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        <p>whatapps</p>
                        <div className="grid justify-end">
                            {whatappsShow ?(
                                <ChevronUp />    
                            ):(
                                <ChevronDown />
                            )}
                        </div>
                    </li>
                    {whatappsShow && (
                        <li className="item-sidebar">
                            <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            </svg>
                            <p>08xx-xxxx-xxxx</p>
                        </li> 
                    )}
                </ul>
            </section>
        </main>
    )
}

export default Sidebar;