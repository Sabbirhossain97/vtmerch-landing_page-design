import React from 'react'

function Features() {
    return (
        <div className='features bg-[]'>
            <div className='py-[100px] px-[160px] flex gap-[93px]'>
                <div className='flex flex-col'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g clip-path="url(#clip0_0_614)">
                                <path d="M39.5659 19.1357L37.1426 16.8879C36.9774 16.7347 36.8506 16.5447 36.7727 16.3332L34.8697 11.1656C34.5975 10.4374 34.1099 9.80934 33.4718 9.36525C32.8336 8.92115 32.0753 8.6821 31.2978 8.67994H28.4145V7.87104C28.4145 7.52317 28.2763 7.18955 28.0303 6.94357C27.7843 6.69759 27.4507 6.5594 27.1028 6.5594H9.67727C9.418 6.55634 9.16775 6.65453 8.97973 6.83308C8.7917 7.01163 8.68073 7.25648 8.6704 7.51557C8.66798 7.64508 8.6914 7.77377 8.73928 7.89413C8.78717 8.01449 8.85857 8.1241 8.9493 8.21654C9.04003 8.30899 9.14828 8.38243 9.26772 8.43257C9.38716 8.4827 9.51539 8.50853 9.64493 8.50854H26.4652V16.9653C26.4652 17.3132 26.6034 17.6468 26.8494 17.8928C27.0954 18.1388 27.429 18.277 27.7769 18.277H35.6981L38.0507 20.3942V28.2919H35.9179C35.7055 27.3625 35.1839 26.5328 34.4385 25.9385C33.6931 25.3442 32.768 25.0206 31.8147 25.0206C30.8614 25.0206 29.9363 25.3442 29.1909 25.9385C28.4455 26.5328 27.9239 27.3625 27.7115 28.2919H21.1484C20.9361 27.3625 20.4145 26.5328 19.6691 25.9385C18.9236 25.3442 17.9986 25.0206 17.0452 25.0206C16.0919 25.0206 15.1668 25.3442 14.4214 25.9385C13.676 26.5328 13.1544 27.3625 12.942 28.2919H9.67719C9.41789 28.2888 9.16761 28.3871 8.9796 28.5657C8.79158 28.7443 8.68065 28.9892 8.6704 29.2483C8.66798 29.3778 8.6914 29.5065 8.73929 29.6269C8.78717 29.7472 8.85857 29.8568 8.94931 29.9493C9.04004 30.0417 9.14829 30.1151 9.26773 30.1653C9.38717 30.2154 9.5154 30.2412 9.64493 30.2412H12.9584C13.1842 31.1544 13.7093 31.9657 14.45 32.5456C15.1907 33.1255 16.1043 33.4405 17.045 33.4405C17.9857 33.4405 18.8992 33.1255 19.6399 32.5456C20.3806 31.9657 20.9057 31.1544 21.1315 30.2412H27.7281C27.9538 31.1544 28.4789 31.9657 29.2196 32.5456C29.9603 33.1255 30.8739 33.4405 31.8146 33.4405C32.7553 33.4405 33.6689 33.1255 34.4095 32.5456C35.1502 31.9657 35.6754 31.1544 35.9011 30.2412H38.6884C39.0362 30.2412 39.3698 30.103 39.6158 29.857C39.8618 29.6111 40 29.2775 40 28.9296V20.1106C39.9999 19.9267 39.9612 19.745 39.8864 19.5771C39.8116 19.4092 39.7024 19.2588 39.5659 19.1357ZM28.4145 16.3281V10.629H31.2978C31.6774 10.63 32.0477 10.7468 32.3593 10.9636C32.6709 11.1804 32.9089 11.4871 33.0418 11.8427L34.7031 16.3281H28.4145ZM17.045 31.4911C16.5979 31.4911 16.1608 31.3585 15.789 31.1101C15.4172 30.8617 15.1275 30.5086 14.9564 30.0955C14.7853 29.6824 14.7405 29.2279 14.8277 28.7893C14.915 28.3508 15.1303 27.948 15.4465 27.6318C15.7626 27.3157 16.1655 27.1004 16.604 27.0131C17.0426 26.9259 17.4971 26.9707 17.9102 27.1418C18.3233 27.3129 18.6764 27.6027 18.9248 27.9745C19.1732 28.3463 19.3057 28.7834 19.3057 29.2305C19.305 29.8298 19.0666 30.4045 18.6428 30.8283C18.219 31.2521 17.6444 31.4905 17.045 31.4911ZM31.8146 31.4911C31.3675 31.4911 30.9304 31.3586 30.5586 31.1101C30.1868 30.8617 29.8971 30.5087 29.7259 30.0956C29.5548 29.6825 29.51 29.2279 29.5973 28.7894C29.6845 28.3508 29.8998 27.948 30.216 27.6319C30.5322 27.3157 30.935 27.1004 31.3735 27.0131C31.8121 26.9259 32.2666 26.9707 32.6797 27.1418C33.0928 27.3129 33.4459 27.6027 33.6943 27.9745C33.9427 28.3463 34.0753 28.7834 34.0752 29.2305C34.0746 29.8298 33.8362 30.4044 33.4124 30.8282C32.9886 31.252 32.414 31.4904 31.8146 31.4911Z" fill="white" />
                                <path d="M5.48305 13.9608H16.5357C16.7942 13.9608 17.0421 13.8582 17.2249 13.6754C17.4077 13.4926 17.5104 13.2447 17.5104 12.9862C17.5104 12.7277 17.4077 12.4797 17.2249 12.297C17.0421 12.1142 16.7942 12.0115 16.5357 12.0115H5.48305C5.22455 12.0115 4.97663 12.1142 4.79384 12.297C4.61105 12.4797 4.50836 12.7277 4.50836 12.9862C4.50836 13.2447 4.61105 13.4926 4.79384 13.6754C4.97663 13.8582 5.22455 13.9608 5.48305 13.9608Z" fill="white" />
                                <path d="M17.5104 18.4005C17.5104 18.142 17.4077 17.8941 17.2249 17.7113C17.0421 17.5285 16.7942 17.4258 16.5357 17.4258H0.974686C0.845959 17.4247 0.718279 17.449 0.599018 17.4975C0.479757 17.546 0.371277 17.6176 0.279843 17.7082C0.18841 17.7988 0.115832 17.9066 0.0663028 18.0255C0.016773 18.1443 -0.00872803 18.2717 -0.00872803 18.4005C-0.00872803 18.5292 0.016773 18.6567 0.0663028 18.7755C0.115832 18.8943 0.18841 19.0021 0.279843 19.0928C0.371277 19.1834 0.479757 19.255 0.599018 19.3034C0.718279 19.3519 0.845959 19.3763 0.974686 19.3751H16.5357C16.7942 19.3751 17.0421 19.2724 17.2249 19.0897C17.4077 18.9069 17.5104 18.659 17.5104 18.4005Z" fill="white" />
                                <path d="M11.3389 23.8145C11.3389 23.6865 11.3137 23.5597 11.2647 23.4415C11.2157 23.3232 11.1439 23.2158 11.0534 23.1253C10.9629 23.0348 10.8555 22.963 10.7372 22.914C10.619 22.8651 10.4923 22.8398 10.3643 22.8398H3.58998C3.333 22.8421 3.08733 22.9458 2.90642 23.1284C2.72552 23.3109 2.62402 23.5575 2.62402 23.8145C2.62402 24.0715 2.72552 24.3181 2.90642 24.5006C3.08733 24.6831 3.333 24.7868 3.58998 24.7891H10.3643C10.6228 24.7891 10.8707 24.6864 11.0534 24.5036C11.2362 24.3208 11.3389 24.0729 11.3389 23.8145Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_614">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className='pt-6 text-[#fff] font-montserrat text-[24px] font-medium leading-[28.8px] tracking-[0.12px]'>
                        Shipping
                    </p>
                    <p className='pt-3 text-[#fff] text-[16px] font-normal leading-[24px] tracking-[0.08px]'>
                        The attention to detail is evident in every aspect of this backpack.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g clip-path="url(#clip0_0_623)">
                                <path d="M39.5948 8.65074L24.0161 0.0963593C23.7821 -0.0321198 23.4983 -0.0321198 23.2642 0.0963593L17.3923 3.32054C17.2684 3.3532 17.1527 3.41545 17.0569 3.50487L7.68587 8.65074C7.43593 8.78777 7.2806 9.05022 7.2806 9.33556V19.6816C5.69979 20.176 4.25112 21.0479 3.04659 22.2527C-0.0930625 25.3921 -0.893539 30.1803 1.0547 34.1674C1.24391 34.555 1.71175 34.7158 2.09932 34.5263C2.4872 34.3368 2.64772 33.869 2.45851 33.4814C0.803239 30.0936 1.48348 26.0253 4.15132 23.3575C5.81972 21.6891 8.03774 20.7702 10.3971 20.7702C12.7564 20.7702 14.9744 21.6891 16.6428 23.3575C18.3109 25.0256 19.2298 27.2436 19.2298 29.6029C19.2298 31.9622 18.3109 34.1802 16.6425 35.8486C13.9746 38.5165 9.90633 39.1967 6.51857 37.5414C6.131 37.3519 5.66317 37.5128 5.47396 37.9003C5.28444 38.2882 5.44496 38.756 5.83284 38.9453C7.28517 39.6551 8.8434 39.9999 10.3903 39.9999C13.089 39.9996 15.7517 38.9492 17.7475 36.9534C18.6627 36.0381 19.386 34.9822 19.8978 33.8345L23.2642 35.6829C23.3814 35.7473 23.5108 35.7794 23.6402 35.7794C23.7696 35.7794 23.8993 35.7473 24.0161 35.6829L39.5948 27.1288C39.8447 26.9915 40 26.7291 40 26.444V21.0146C40 20.5831 39.6503 20.2334 39.2188 20.2334C38.7873 20.2334 38.4375 20.5831 38.4375 21.0146V25.9817L24.4239 33.6767V18.3508L29.0488 15.8111V19.837C29.0488 20.1135 29.1947 20.3692 29.4324 20.5096C29.5551 20.5819 29.6924 20.6182 29.83 20.6182C29.9594 20.6182 30.0891 20.5862 30.2066 20.5215L33.5449 18.684C33.7946 18.5467 33.9493 18.2845 33.9493 17.9998V13.12L38.4375 10.6558V14.7649C38.4375 15.1965 38.7873 15.5462 39.2188 15.5462C39.6503 15.5462 40 15.1965 40 14.7649V9.33556C40 9.05053 39.8447 8.78777 39.5948 8.65074ZM23.6402 1.67229L37.5955 9.33556L33.1934 11.7529L19.238 4.08959L23.6402 1.67229ZM23.6402 16.9985L9.68477 9.33556L14.2484 6.82945L28.2041 14.4924L23.6402 16.9985ZM29.827 13.6013L15.8716 5.93834L17.6148 4.981L31.5705 12.644L29.827 13.6013ZM17.7475 22.2527C15.784 20.2892 13.1735 19.208 10.3971 19.208C9.87185 19.208 9.35305 19.2468 8.8431 19.3227V10.6558L22.8617 18.3535V33.6794L20.4285 32.3434C20.6681 31.4614 20.792 30.5416 20.792 29.6029C20.792 26.8264 19.7107 24.2159 17.7475 22.2527ZM32.3871 17.5381L30.6113 18.5156V14.9532L32.3871 13.9782V17.5381Z" fill="white" />
                                <path d="M39.2188 17.1047C39.0134 17.1047 38.8117 17.1884 38.6664 17.3336C38.5211 17.4789 38.4375 17.6803 38.4375 17.886C38.4375 18.0914 38.5211 18.2928 38.6664 18.438C38.8117 18.5836 39.0134 18.6669 39.2188 18.6669C39.4241 18.6669 39.6259 18.5836 39.7711 18.438C39.9164 18.2928 40 18.0914 40 17.886C40 17.6803 39.9164 17.4789 39.7711 17.3336C39.6259 17.1884 39.4241 17.1047 39.2188 17.1047Z" fill="white" />
                                <path d="M7.77008 30.3843C7.96997 30.3843 8.17017 30.308 8.32245 30.1557C8.62763 29.8505 8.62763 29.3559 8.32245 29.0507L7.78137 28.5093H12.3987C13.5187 28.5093 14.4299 29.4205 14.4299 30.5405C14.4299 31.6605 13.5187 32.5718 12.3987 32.5718H9.66278C9.23126 32.5718 8.88153 32.9215 8.88153 33.353C8.88153 33.7843 9.23126 34.134 9.66278 34.134H12.3987C14.3802 34.134 15.9924 32.5221 15.9924 30.5405C15.9924 28.559 14.3802 26.9471 12.3987 26.9471H7.78137L8.32245 26.4057C8.62763 26.1005 8.62763 25.6059 8.32245 25.3007C8.01758 24.9958 7.52289 24.9958 7.21771 25.3007L5.34271 27.1757C5.03784 27.4809 5.03784 27.9755 5.34271 28.2807L7.21771 30.1554C7.3703 30.308 7.57019 30.3843 7.77008 30.3843Z" fill="white" />
                                <path d="M3.59955 37.1835C3.37738 37.1835 3.15674 37.0889 3.00262 36.9055L3.0011 36.9036C2.72339 36.5734 2.76611 36.0809 3.09631 35.8032C3.42651 35.5252 3.91937 35.5679 4.19708 35.8981C4.47449 36.2286 4.43268 36.7221 4.10248 36.9998C3.95569 37.1231 3.77716 37.1835 3.59955 37.1835Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_623">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className='pt-6 text-[#fff] font-montserrat text-[24px] font-medium leading-[28.8px] tracking-[0.12px]'>
                        Return
                    </p>
                    <p className='pt-3 text-[#fff] text-[16px] font-normal leading-[24px] tracking-[0.08px]'>
                        The attention to detail is evident in every aspect of this backpack.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g clip-path="url(#clip0_0_632)">
                                <path d="M37.1913 17.4393C37.0381 13.0762 35.2713 8.99621 32.1688 5.89371C28.9169 2.64121 24.595 0.850586 20 0.850586C10.7194 0.850586 3.13626 8.23746 2.80939 17.4393C1.39314 18.0687 0.401886 19.4862 0.401886 21.1337V25.6725C0.401886 27.9012 2.21501 29.715 4.44439 29.715C5.88689 29.715 7.06001 28.5418 7.06001 27.0993V19.7062C7.06001 18.3518 6.02126 17.2475 4.70064 17.1162C5.18814 9.09934 11.8619 2.72559 20 2.72559C24.095 2.72559 27.9456 4.32184 30.8438 7.21996C33.505 9.88121 35.0625 13.35 35.2969 17.1168C33.9775 17.2493 32.9406 18.3531 32.9406 19.7062V27.0987C32.9406 28.4643 33.9956 29.5756 35.3319 29.6912V31.5593C35.3319 33.6631 33.62 35.3743 31.5163 35.3743H28.6906C28.5519 34.9781 28.3344 34.6118 28.0294 34.3081C27.495 33.7712 26.7825 33.4756 26.0238 33.4756H23.1113C22.6931 33.4756 22.2919 33.5643 21.9244 33.7356C20.9219 34.1962 20.2744 35.2075 20.2744 36.3118C20.2744 37.0706 20.57 37.7831 21.1056 38.3162C21.6413 38.8531 22.3538 39.1487 23.1113 39.1487H26.0238C27.2313 39.1487 28.2956 38.3681 28.6925 37.2493H31.5163C34.6544 37.2493 37.2069 34.6968 37.2069 31.5593V29.3575C38.6144 28.7243 39.5981 27.3118 39.5981 25.6712V21.1325C39.5981 19.4862 38.6069 18.0687 37.1913 17.4393ZM5.18439 19.7062V27.0987C5.18439 27.5068 4.85251 27.8393 4.44376 27.8393C3.24876 27.8393 2.27626 26.8668 2.27626 25.6718V21.1331C2.27626 19.9375 3.24876 18.9656 4.44376 18.9656C4.85251 18.9656 5.18439 19.2981 5.18439 19.7062ZM26.9644 36.5131C26.8713 36.9543 26.475 37.275 26.0231 37.275H23.1106C22.8544 37.275 22.6138 37.175 22.43 36.9912C22.2488 36.8106 22.1488 36.5693 22.1488 36.3131C22.1488 35.9387 22.3681 35.5968 22.7119 35.4387C22.8344 35.3812 22.9688 35.3518 23.1106 35.3518H26.0231C26.2794 35.3518 26.52 35.4512 26.7031 35.635C26.8844 35.8156 26.9844 36.0568 26.9844 36.3131C26.985 36.3818 26.9775 36.4506 26.9644 36.5131ZM37.7231 25.6718C37.7231 26.8668 36.7506 27.8393 35.5556 27.8393C35.1475 27.8393 34.815 27.5075 34.815 27.0987V19.7062C34.815 19.2981 35.1469 18.9656 35.5556 18.9656C36.7506 18.9656 37.7231 19.9381 37.7231 21.1331V25.6718Z" fill="white" />
                                <path d="M26.0706 25.9949C28.2613 25.9949 30.0431 24.2124 30.0431 22.0224V13.9281C30.0431 12.8693 29.6294 11.8718 28.8781 11.1206C28.1269 10.3693 27.13 9.95557 26.0706 9.95557H13.9294C11.7388 9.95557 9.95688 11.7374 9.95688 13.9281V22.0224C9.95688 24.2131 11.7388 25.9949 13.9294 25.9949H14.0038V28.0924C14.0038 28.8924 14.4806 29.6024 15.2181 29.9018C15.4563 29.9974 15.7038 30.0449 15.9488 30.0449C16.4594 30.0449 16.9569 29.8424 17.3213 29.4656L20.8106 25.9949H26.0706ZM19.7638 24.3924L15.9875 28.1481C15.9706 28.1656 15.9581 28.1787 15.9225 28.1631C15.8794 28.1456 15.8794 28.1174 15.8794 28.0924V25.0574C15.8794 24.5399 15.46 24.1199 14.9419 24.1199H13.93C12.7731 24.1199 11.8325 23.1787 11.8325 22.0224V13.9281C11.8325 12.7712 12.7731 11.8306 13.93 11.8306H26.0713C26.63 11.8306 27.1556 12.0493 27.5531 12.4462C27.9506 12.8437 28.1688 13.3699 28.1688 13.9281V22.0224C28.1688 23.1793 27.2275 24.1199 26.0713 24.1199H20.425C20.1769 24.1199 19.9394 24.2181 19.7638 24.3924Z" fill="white" />
                                <path d="M15.4456 16.7419C14.6831 16.7419 14.0625 17.3632 14.0625 18.1251C14.0625 18.8869 14.6837 19.5082 15.4456 19.5082C16.2087 19.5082 16.83 18.8869 16.83 18.1251C16.83 17.3632 16.2094 16.7419 15.4456 16.7419Z" fill="white" />
                                <path d="M19.9994 16.7419C19.2369 16.7419 18.6163 17.3632 18.6163 18.1251C18.6163 18.8869 19.2375 19.5082 19.9994 19.5082C20.7631 19.5082 21.3838 18.8869 21.3838 18.1251C21.3838 17.3632 20.7631 16.7419 19.9994 16.7419Z" fill="white" />
                                <path d="M24.5531 16.7419C23.7906 16.7419 23.17 17.3632 23.17 18.1251C23.17 18.8869 23.7912 19.5082 24.5531 19.5082C25.3162 19.5082 25.9375 18.8869 25.9375 18.1251C25.9375 17.3632 25.3162 16.7419 24.5531 16.7419Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_632">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className='pt-6 text-[#fff] font-montserrat text-[24px] font-medium leading-[28.8px] tracking-[0.12px]'>
                        Support
                    </p>
                    <p className='pt-3 text-[#fff] text-[16px] font-normal leading-[24px] tracking-[0.08px]'>
                        The attention to detail is evident in every aspect of this backpack.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <g clip-path="url(#clip0_0_643)">
                                <path d="M15.4645 16.8757C15.4645 18.4888 17.0423 19.8012 18.9817 19.8012C21.9551 19.8012 24.374 21.9548 24.374 24.6019C24.374 26.8956 22.5573 28.8177 20.1378 29.2902L20.1804 30.7596C20.1953 31.2772 19.788 31.7088 19.2705 31.7239C19.2612 31.7241 19.252 31.7243 19.2428 31.7243C18.7376 31.7243 18.3209 31.3223 18.3063 30.814L18.2641 29.3587C15.629 29.0452 13.5895 27.0323 13.5895 24.6019C13.5895 24.0841 14.0092 23.6644 14.527 23.6644C15.0447 23.6644 15.4645 24.0841 15.4645 24.6019C15.4645 26.2151 17.0423 27.5275 18.9817 27.5275C20.9212 27.5275 22.499 26.2151 22.499 24.6019C22.499 22.9887 20.9212 21.6762 18.9817 21.6762C16.0084 21.6762 13.5895 19.5227 13.5895 16.8757C13.5895 14.5816 15.4068 12.6592 17.8269 12.1871L17.783 10.7187C17.7676 10.2012 18.1746 9.76922 18.6921 9.75375C19.2095 9.73844 19.6417 10.1453 19.6572 10.6629L19.7006 12.119C22.3352 12.433 24.3741 14.4457 24.3741 16.8757C24.3741 17.3934 23.9544 17.8132 23.4366 17.8132C22.9189 17.8132 22.4991 17.3934 22.4991 16.8757C22.4991 15.2625 20.9213 13.9501 18.9819 13.9501C17.0424 13.9501 15.4645 15.2624 15.4645 16.8757ZM29.9688 11.1391C30.1519 11.3221 30.3917 11.4137 30.6316 11.4137C30.8716 11.4137 31.1115 11.3221 31.2945 11.1391L34.625 7.80859C34.9912 7.44242 34.9912 6.84891 34.625 6.48273C34.2588 6.11664 33.6654 6.11664 33.2991 6.48273L30.6316 9.15031L29.6375 8.15617C29.2712 7.79008 28.6779 7.79008 28.3116 8.15617C27.9455 8.52234 27.9455 9.11586 28.3116 9.48203L29.9688 11.1391ZM36.777 15.0802C37.3566 16.9042 37.6511 18.8042 37.6511 20.7387C37.6511 25.7255 35.7091 30.4137 32.183 33.94C28.6568 37.4662 23.9685 39.408 18.9818 39.408C13.9951 39.408 9.3068 37.4662 5.78055 33.94C2.25437 30.4137 0.3125 25.7255 0.3125 20.7387C0.3125 15.752 2.25437 11.0637 5.78055 7.5375C9.3068 4.01141 13.9951 2.06945 18.9818 2.06945C21.2102 2.06945 23.382 2.45758 25.4484 3.22148C26.9503 1.605 29.093 0.591797 31.4684 0.591797C36.0004 0.591797 39.6875 4.27891 39.6875 8.81094C39.6875 11.321 38.5561 13.5714 36.777 15.0802ZM25.1242 8.81094C25.1242 12.3091 27.9702 15.155 31.4684 15.155C34.9665 15.155 37.8125 12.3091 37.8125 8.81094C37.8125 5.31273 34.9665 2.4668 31.4684 2.4668C27.9702 2.4668 25.1242 5.31281 25.1242 8.81094ZM35.1442 16.1607C34.0374 16.7165 32.7889 17.03 31.4684 17.03C26.9363 17.03 23.2492 13.343 23.2492 8.81094C23.2492 7.35641 23.6295 5.98914 24.2952 4.80266C22.5888 4.2332 20.8067 3.94445 18.9818 3.94445C9.72141 3.94445 2.1875 11.4784 2.1875 20.7387C2.1875 29.9991 9.72141 37.533 18.9818 37.533C28.2422 37.533 35.7761 29.9991 35.7761 20.7387C35.7761 19.1783 35.5635 17.6433 35.1442 16.1607Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_643">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className='pt-6 text-[#fff] font-montserrat text-[24px] font-medium leading-[28.8px] tracking-[0.12px]'>
                        Payment
                    </p>
                    <p className='pt-3 text-[#fff] text-[16px] font-normal leading-[24px] tracking-[0.08px]'>
                        The attention to detail is evident in every aspect of this backpack.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Features