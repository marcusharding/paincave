import React from 'react'
import { Fragment } from 'react'

const fakeArray = [1,1,1]

export class WhoAreWe extends React.Component {

    render() {

        const widget = fakeArray.map(() =>
            <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="257" height="257"><defs><clipPath id="a"><path data-name="Rectangle 9" transform="translate(279 1582)" fill="#8b0325" stroke="#707070" d="M0 0h257v257H0z"/></clipPath></defs><g data-name="Mask Group 1" transform="translate(-279 -1582)" clip-path="url(#a)"><g data-name="Group 2"><g data-name="Group 1"><path data-name="Path 2" d="M444.979 1764.042h-74.958a5.354 5.354 0 00-5.354 5.354v42.833a5.354 5.354 0 005.354 5.354h74.958a5.354 5.354 0 005.354-5.354V1769.4a5.354 5.354 0 00-5.354-5.358zm-5.354 42.833h-64.25v-32.125h64.25z" fill="#8b0325"/></g></g><g data-name="Group 4"><g data-name="Group 3"><path data-name="Path 3" d="M461.042 1806.875H353.958a5.354 5.354 0 00-5.354 5.354v16.063A10.708 10.708 0 00359.312 1839h96.375a10.708 10.708 0 0010.713-10.708v-16.063a5.353 5.353 0 00-5.358-5.354zm-5.354 21.417h-96.375v-10.708h96.375z" fill="#8b0325"/></g></g><g data-name="Group 6"><g data-name="Group 5"><path data-name="Path 4" d="M519.938 1582H295.063A16.063 16.063 0 00279 1598.063v160.625a16.063 16.063 0 0016.063 16.062h224.875A16.063 16.063 0 00536 1758.688v-160.625A16.063 16.063 0 00519.938 1582zm5.354 176.688a5.354 5.354 0 01-5.354 5.354H295.063a5.354 5.354 0 01-5.354-5.354v-160.625a5.354 5.354 0 015.354-5.354h224.875a5.354 5.354 0 015.354 5.354z" fill="#8b0325"/></g></g><g data-name="Group 8"><g data-name="Group 7"><path data-name="Rectangle 10" fill="#8b0325" d="M337.896 1828.292h139.208V1839H337.896z"/></g></g><g data-name="Group 10"><g data-name="Group 9"><path data-name="Path 5" d="M509.229 1603.417H305.771a5.354 5.354 0 00-5.354 5.354v26.771h10.708v-21.417h192.75v21.417h10.708v-26.771a5.354 5.354 0 00-5.354-5.354z" fill="#8b0325"/></g></g><g data-name="Group 12"><g data-name="Group 11"><path data-name="Path 6" d="M503.875 1721.208v21.417h-192.75v-21.417h-10.708v26.771a5.354 5.354 0 005.354 5.354h203.458a5.354 5.354 0 005.354-5.354v-26.771z" fill="#8b0325"/></g></g><g data-name="Group 14"><g data-name="Group 13"><path data-name="Path 7" d="M359.313 1699.792v-10.708H348.6v10.708a4.9 4.9 0 01-5.354 5.354H337.9a4.9 4.9 0 01-5.354-5.354v-42.833a4.9 4.9 0 015.354-5.359h5.35a4.9 4.9 0 015.35 5.359v10.708h10.713v-10.708q.014-.456 0-.913a15.612 15.612 0 00-16.063-15.146h-6.693a5.357 5.357 0 00-1.81.316 15.3 15.3 0 00-12.913 15.743v42.833q-.014.456 0 .913a15.612 15.612 0 0016.066 15.149h6.693a5.358 5.358 0 001.81-.316 15.3 15.3 0 0012.91-15.746z" fill="#8b0325"/></g></g><g data-name="Group 16"><g data-name="Group 15"><path data-name="Path 8" d="M391.882 1640.9h-11.6a15.635 15.635 0 00-15.616 15.614v43.722a15.635 15.635 0 0015.618 15.618h11.6a15.635 15.635 0 0015.616-15.618v-43.722a15.635 15.635 0 00-15.618-15.614zm4.91 59.34a4.915 4.915 0 01-4.91 4.91h-11.6a4.915 4.915 0 01-4.91-4.91v-43.726a4.915 4.915 0 014.91-4.91h11.6a4.915 4.915 0 014.91 4.91z" fill="#8b0325"/></g></g><g data-name="Group 18"><g data-name="Group 17"><path data-name="Path 9" d="M440.069 1640.9h-21.861a5.354 5.354 0 00-5.354 5.354v64.246a5.354 5.354 0 005.354 5.354h21.861a15.635 15.635 0 0015.618-15.618v-43.722a15.635 15.635 0 00-15.618-15.614zm4.91 59.34a4.915 4.915 0 01-4.91 4.91h-16.506v-53.55h16.507a4.915 4.915 0 014.91 4.91v43.722z" fill="#8b0325"/></g></g><g data-name="Group 20"><g data-name="Group 19"><path data-name="Path 10" d="M493.167 1651.6v-10.7H466.4a5.354 5.354 0 00-5.354 5.354v64.246a5.354 5.354 0 005.354 5.354h26.771v-10.707H471.75V1651.6z" fill="#8b0325"/></g></g><g data-name="Group 22"><g data-name="Group 21"><path data-name="Rectangle 11" fill="#8b0325" d="M466.396 1673.021h26.771v10.708h-26.771z"/></g></g><g data-name="Group 24"><g data-name="Group 23"><path data-name="Rectangle 12" fill="#8b0325" d="M300.417 1699.792h10.708v10.708h-10.708z"/></g></g><g data-name="Group 26"><g data-name="Group 25"><path data-name="Rectangle 13" fill="#8b0325" d="M300.417 1646.25h10.708v10.708h-10.708z"/></g></g><g data-name="Group 28"><g data-name="Group 27"><path data-name="Rectangle 14" fill="#8b0325" d="M503.875 1646.25h10.708v10.708h-10.708z"/></g></g><g data-name="Group 30"><g data-name="Group 29"><path data-name="Rectangle 15" fill="#8b0325" d="M503.875 1699.792h10.708v10.708h-10.708z"/></g></g><g data-name="Group 32"><g data-name="Group 31"><path data-name="Rectangle 16" fill="#8b0325" d="M503.875 1673.021h10.708v10.708h-10.708z"/></g></g><g data-name="Group 34"><g data-name="Group 33"><path data-name="Rectangle 17" fill="#8b0325" d="M300.417 1673.021h10.708v10.708h-10.708z"/></g></g></g></svg>
                <p className="text-white mb-6 lg:mb-0 lg:text-center pt-12 w-3/4">Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet.</p>
            </div> 
        )
     
        return(
            <div className="wrapper">
                <h1 className="text-offWhite uppercase font-bold text-4xl lg:text-5xl pb-6">Who are we</h1>
                <p className="text-white text-xl w-1/2 pb-24">Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet.</p>
                
                <div className="flex flex-col lg:flex-row justify-between">
                    <div>
                        {widget}
                    </div>
                </div>
            </div>
        )
    }
}