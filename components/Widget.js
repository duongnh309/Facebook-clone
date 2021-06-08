import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    {
        src: "https://lh3.googleusercontent.com/vzd-xVMYDnvv4_QSgxjAJ1ckcvyThIkyxagzq8fXXbpT52DHPPDVFSmTfFsuUJNG414OS_gDq2QJYaXdSEJZqJw8r24ntGcOrva_yPLi3y5vA3HYdvdkec1GlSHXO8JGdrjV3KbHNLcBCFdhHf5NJbTlDCbebzDPoeFYJZ838_yMvChdeGtM-uOpr2vnmF3pCZfG7Pul8WerFc0kuzPIKdZ4c0i8RCgi6828GdNRMElzvW08hNCNnZeKlGh4vo1aul2A6dgsed-6ysPzIJre8MLsn1reEvB3wWncntZtCl5C6wlHLMjcweIIjkfAt_JNW6wEEX5TgA9Sv0Ah6_QyPghyNT8gPezYdsiq_81Bc5_KqZq_ZFdEjSx1WpT9160_OCkFAvHgaa05yjSppj_bvaXVUz5Y843j7pccPl-Z377ycr-I7nWcz4OPqgDrdLnUVWY5_KbNdNUNE2UR-4Q0tAAxRb5U2Mj7mij-wRqxfWAkVVDIYDRqpBtul0AVxwyQbJ11p_VyIzh0e4YVyakH4GdX_veseS93N9SsPYZYnYThaNCdVHp03HojoHtJNbAED6FSlUfJfKCs0xcAhcTZZQHF-WCORRw3xpr6Tkw7BaYDdIhHmteMrE9noN7o-ppKGyrOA8Nj5GSesMWemwrEkfjfqVuot6zDK_F9V6KYOVy83vzTI7whwtNOO7Py-yKRCV8WzlODdBthPJ0cKlVd1Ida=w755-h943-no?authuser=0",
        name: "Lyly"
    },
    {
        src:"https://lh3.googleusercontent.com/zPxGi8jY4J5yuLH5Fnmwhs7HqB2hbyig7a3HQL3DsXpZhCBsiYBi3woE_pXT8IPUpP8hiX5WZibXRR9YWtgTw3oXWQ2TN1JKhTtMcDSYZ3UWjYgCOojPBXiUKrqby7Vrr55wj-fBskdwn8S3cVVQYPKKIUHhD6FqnZUp8yImNnSLSUbkBT8hLS_N62ZIK_iFCnAWFLF_2jOcE-QW0gz6lNV9Fmoazp1A0czzVWcWbAik_4GW92EA_4IeFh-9ISQsfCsj_S2-JqeQnHQwapek5M-w-HSHL6LiJwm66XH6StoXrOSQNBvpWy6XebqT_P02Wuz6rJ_z2_dx4XQPpIfnympy0g5UFRgAAR4csemLJQCCAsifNM_1rygG5vxU9iZDr89IYJQh3rWuK5R9hRH6dx_dsXj075XZwj2ug6lAIAFCPXrANGkCM77bdaZjIHYyW7CKphVMfrj108D5zUzaK12MyXWuGTc1NUOzx-4xPvNmmYA-PQNS-b3Pr4LinruSjVOo40FUrPB2lYPnRO2CbNdzmO_OkmseofWN6nR6LxvuPNJJAdBRDH9cMUBaWqZR3luv7gucrbo4poYUjq2fXvNJ6fs3Pm4ENXBIy-tCAn5mHqkXJnDQwDjkm56_WyXr-xx3f__jXpw4eQ2fRzqoXOrcWjIb1USJohpIYLM8P1OVhpmm_-V0A12K_VZDE2OA29HpjPcmjLiE7Z8TfHABJiup=w755-h943-no?authuser=0",
        name:"Lisa Manoban"
    },
    {
        src:"https://lh3.googleusercontent.com/I1ymIkJ06r4ML0NJvwe3RMVL_ysK2HqLs4QlO-sZmp8fDOiiP3Ac3zmP0k-MhXlhk_SgeZScUaHhVsL6kwUzA3TJxnUaO9GRvxcQLi_vxo0Hc0hIzRp1CBuDPYj2inyNJ1V-NKQRFlJUgcRdL0jtQnYqWM_zxohQOS36nMUizep6RwnyOMJCSIYfVv-SbpW9rHbaAGWh234NIUZZ-UYGQTWdktVv6zcL8ccjCT55xAXVFX00oH8SbeR6HzC-q8IA3fNVlYCY2flmLwbVC2RJpAJhvxOy6O3azBBHKjTRB4kIcgnZj2OhxI_k3nnQPAD-YeX3OibJR8X5GLl8I2TQgAHqcbcNrrF5ZpYj2FVPekn315soLXPzlgRSu436SyWt2CklyPRdn-YKbXtKVv-Y-e9okv9blNDxeRfmj27m_CxXyaCZxbaN4y6V3taQXHxPsW7yKEkGr8kdl2_HG_7xalp4Evb7zVJUxCARCbD8iQdfJ6L3cye3cJ6AahA0PIloF52CIsRxlIcvKWmMQuoJ3afEel7ZhkjEHs7M2srKRlBOyV61XoqQ2HKtMjDvb2BbN_DuSiO6EMmyEnFmjJ_qo0RdLyrn0IHmu7rwq-H8u4AvasDHXUyfI7ln0xjpRWQ0QagEPBQiBfRFnRnKo_K16FrGLulisph8SUSP1MdrCu7b2zRWhsSN9PGMb2gTaALTYrX0elXWxLOiWXr7G1TgQb3a=w675-h449-no?authuser=0",
        name:"Rosé Park"
    },
    {
        src:"https://lh3.googleusercontent.com/kyfxnnBZ1eTSykaPOr0mXprME5uAP9vSH76_flq4hRAwNNbWunxLR6ga1_48nkPIoeLNHlLrqzHp5XCxZpayvaD008bAJEDwHYcYsTJbcT9CTCIpPyJWo6Pj0_WjN4wVCee_WyZTouWMCrlZ2PxT38XTRSyynpKAviblRJL3xfg45vv07IzA6pk_0Yrx99B8KXEc8S2ipee_KYeKtJMoSVLeg6EuQw9_6akPmLwKt6raYH122W9tsbvnXyM0BuFDOu2AMgVxJhO4bsJuS_IdmQWNB0S2tTxgvsrKvkSWjOv_0peqRnu9TXpnzYrt-qqiMjvg7nN0LWmbFsHo1Tht28xaa9KvPH9VN_jy83mhD5YvJcrPf0pix8M7SmNvqxnsaYbwikaQkGbkx-zFDqoLPF0HioqH5nnKsJmjx9H8f9vvG0RgLO4Dia5l9BTZZN69L6LhUzl6D4WTWkEuo-Cz5bVCoKxtGqWYHxFo_awc2moeo15GE8hHrINY5KFfmKF71sFekOm-sLtnIfh5lvaOlE7J_Md3c7UVv7ahOO4kIb2Xddl4Dwos5VjIh7wt5oOaB_GY78OymgI55dsdlxnSbp2lTuuONhzp1BTqTKtfO8z8kAJhxk1ItEfjoa5JNNJPN7dTtEQkFoAo8EnNWElapQfE85bgj27aD5I3XnTUni35OEP6EU5LZOMDIZQPAJzR7kVxWKU1nCPTFGPP3JmuMCtl=w755-h943-no?authuser=0",
        name:"Hằng Phạm"
    },
    {
        src:"https://lh3.googleusercontent.com/GSNvjTNFV2deRWkt1r2nOalPQ0Mb3e-3v4sWE3Ps5NuYszKFVRgo9jEQfxW15dugSDgFBqol-oQn7CR5BLvXpilBXfOvwWnY7r5uQ4PkPeiBcJE97hAU1XuPw88SVxtej7egsjxcBwMkBHvtsylIH0lNn59DAME6zYNamLFb6wLfTHJljVaorAC3EmXzjGEk9OKgCUd58DHUIuaFORwzubR7E9Jm_Gh9AXlhDEKDp2-EZAFF0EgVOreog-Nie7CUrIGdLewiDpeMmiRXyIG7zEaDJeQs4JQ-ROqJfiQedf6qg6SeDAyw-Rw_cfO5pPVP4QGNE2ALYnsFM0OfpvLqFjBGmjVkr6zG4n7D6TzDVRH3Dhc8UWwfobbXWcAOaAWEHjh4uRVBF1FRkvYo4Ahjiq3D5yWDSnJ9zybiffIrHKkMwGRXKI0sAJUQvjLP4of_BxO3uDrE4gMCrZ6AwBKz4dwJcFGsRgaM-xPS_j_Dk26-1WtZBgOY1QTOfSHM2HUXWsBzSuECtJPUN_Bt2byv3JbNjc5JHJO1xj_f2rvGIcVUfAlMrhQdql5HOsm0x-p6SRCsRik45J5dMXq7_YJDP0X7z-uCR0o3QjQLIaeWKiAzR6H-M6mXgkf4EO-JmDYumCFgqQYH83BQx7CvZtMkMb5f-Hq0BCnN1WxeZBEUgzj8YpYQ6pQvLZhmq-p0j__o6uZbRpMLGsLB9V25A8uquyjz=w890-h943-no?authuser=0",
        name:"Quỳnh Mai"
    },
    {
        src:"https://lh3.googleusercontent.com/b2Rb9qW-6qfysmE1nd11HlGIi0-t2QPPw3AhKGTSPtp6OM33U-Tb1djJpCWyH7t8mrzjUM1qd67O2O01F-A8ZCV57iDNNp6kukAOWm_oGfnWYceCzR48fta9yGqRArfid3TR0fUfyxGFtjJuhzWAuPDAXlet0VopoVT_ZcOJwf5wgecEi1qbND5HWXSfQJpOpJm7a5hvQsCKTNMsqJAJ-zkqFjdrzc1EmDdC5r2u0Tr9D7T4u895IkfArh6F8WkUhb1gY3Xf6n3Vf56VcNGQxKwwJt-7eLbqIv5rmCOgnB589NXq_XV-oGONEifWGR6JFxpo8AHOOnBO5Zw2jxDExsVJlNBDus6ce8Lf2f2ya8nJj92li-A_zxQmg-x0ggIfLQrpnAwnm5pB7htqrTMChVbGUJLlSuYNNHup5lDcRTAOlbQtIW5WI3UCjcbCIDAx1UjOC6BkkrxRq0Xkd9VRhoQ8KGdqsDEv0mMlZD20YozQy78DV-VgNmnDE2gU_J4WJV3V7zXXm-893LfG4NDAVutKHZkKxgbmEhNP6yTef2FnaRf53RmtWPWmN2Rj4F1gMLGZO5oY0u5DWaIIMDFNu2lOBCoLroOu8wk-f45AEB9RWmPWVb6VSU5ul0DOPGE7NDM61qmKMAD8tRgDeNZ2ToQNDm7wOVnzpLrsI63EKE1J4VDlfnDWy5rdtFgYL0BGuMZBHIwUmNToChTgmPX8aGqW=w708-h943-no?authuser=0",
        name:"Thu Hà"
    },
];

function Widget(props) {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

        {contacts.map(contact => (
            <Contact key={contact.id} src={contact.src} name={contact.name} />
        ))}
        </div>
    );
}

export default Widget;