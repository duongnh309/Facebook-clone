import StoryCard from "./StoryCard";


const stories = [
    {
        name: "Nguyễn Hữu Dương",
        src: "https://lh3.googleusercontent.com/PTPuq6RNsKdxMsZUrMNIIdmQohHsRktu_dS56nQVvBDERl1kiCvKMD071blf4anjTR1MAs62SH5i97bIwtrp1A5rVaxLd8cEXlr5YWQGpvjaueBhHlSA7Z2c05GOqLKvL5DpKJ55DHzwu6vG6NjedIXr7R1UNC3qfcAW2G8RT9p5KbsOOk2RLo4nGYvFFc3ef0cd2fiXiGmwCvNZSdeOeWzPBVgYA1726x8zxls2XT3K_av1qeES2RUMkYjYkRQFLpYzrqLQEq_XOjRjXowulkLNXLTfatWfvscVuoR5GOfXTatkdDidS6CsKGgR9EXyk6QBFDV08kd7ntaZnAw437sVQ-b4NbdJHCL7BaGfioWSfXbtdqfRJnAS6DWUmRRAAD4igKj4Sci4xixNBJY2Qd8MjIswtskp7tx1QdLe9H3Eh_E3lseSKdb7q8lkFefpcyMDitujT0_r76rE5nAQF3BZl9YOVbUBmRI0M3rknz8DLatEDvTIGUcV381SiPFvGKVzEawiezIosl2iVad3RF6NmVU1LfLyO-3Bjd0jckQwnlGLAR_dnVr9NuH01L8xxIE4FFScZetE1KNdnU8h2I6MWKxjCDnncXtz2JvYblKFDSZeEWu1R1vuRycGVo80i6w5oYQJhOn8UqbJXeHOFN9Mo9c7WEOPUgas-VbywMIvYlTCmj3SOOKZYNTIsTP1arULSndt9E-ndggLCRcM2ibM=w748-h925-no?authuser=0",
        profile: "https://lh3.googleusercontent.com/Qc1PRZmN09VktpEVn1gR0DnodG8mQM3LEa-p468Eian3-VJ-TB91pr6rTi2bPzJDNWoAu62D8m2FzmZMCABROqwLsEuaNeXRZ_3ow61-xwEL2enU20XwmMd1EkDooyp1FnXDX_LoT8PP7wxVJbE6IDzSxNARJUoHZy3pJxxw0247o2xPhTCAqWxlnw_IYTLafcUhDVTDZgu2zQYKCdcdMzAXSsKe9qk3i1_Ztec34lr3RjClJqRiMato0DK_vYg9bkSe2P2YOkaBodLZcJFjMquyfwxoMGDb-W5FcLcuuXMWNs8SBQ8BBXHQ2XWEYLwWN7hWNUe-Gmq73AGKywvNPGLEB-w97QCZAwElk24boJ6_Y4JW8Lr2ofDfIU6RsrdReQgx-FWfERJ2OgWxt0b4S9G0QsD_r4dhJtPBnkd8GurajQ85odjoBDiqBlaEZLYNyLM9lvelgT6lIEzlWSyB8Vx5TCExDo7olNpBuGy4jSJ-aqq0dpwmBiMdqREh3otLTtE67ftoKMxmVGtjsbnLSXui6XPSx7Gp2UKB8jJ46tpFXKeZFZu6NqZ0ogjBimhpWfPKDi5hcCo3LUs6ADaIdilRxKIyUaS_H1A0G458Ck8Wl5fOmzpUDeLu7GYl7eSNiAMMU76dFeNVBu7cYSsC8sJZHb26AKtBX_y3aYHwyDkOBQ8uxuxmnC5SpaYRhd2I6QgIfCUEB15LW_EpNfgOk0Ki=w694-h925-no?authuser=0",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
]

function Stories(props) {
    return (
        <div className="flex justify-center space-x-3 mx-auto ">
            {stories.map(story => (
                <StoryCard 
                key={story.src}
                name={story.name} 
                src={story.src} 
                profile={story.profile}/>
            ))}
        </div>
    );
}

export default Stories;