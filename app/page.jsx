"use client";
import { Group, Stack, Image, Text, Card, Badge } from "@mantine/core";
import { useState } from "react";
import UserCard from "../components/UserCard";
import moment from "moment";

let data = [
    {
        memberId: "memberId1",
        name: "John Smith",
        dob: "1970-01-01",
        dod: "2040-06-15",
        photo: "/images/john_smith.jpg",
        parents: [],
        spouse: ["memberId2", "memberId3"],
        children: ["memberId4", "memberId5", "memberId6", "memberId7"],
        story: "John Smith grew up in a small town and always had a passion for building things. He became an engineer and dedicated his career to working on infrastructure projects across the country. John had two marriages; his first with Jane Doe and later with Emily Davis. He loved spending time with his children and teaching them about engineering and the world.",
    },
    {
        memberId: "memberId2",
        name: "Jane Doe",
        dob: "1972-03-15",
        dod: "2035-11-22",
        photo: "/images/jane_doe.jpg",
        parents: [],
        spouse: ["memberId1"],
        children: ["memberId4", "memberId5"],
        story: "Jane Doe always loved art and pursued a career as an art teacher. She met John Smith during a community project, and they quickly connected over their love for creativity. Jane dedicated her life to her family and her students, and although she and John later separated, they remained good friends for the sake of their children.",
    },
    {
        memberId: "memberId3",
        name: "Emily Davis",
        dob: "1975-07-22",
        photo: "/images/emily_davis.jpg",
        parents: [],
        spouse: ["memberId1"],
        children: ["memberId6", "memberId7"],
        story: "Emily Davis is a passionate environmentalist who has worked with various NGOs to promote sustainable living. She met John Smith during a charity event, and their mutual respect grew into love. Emily loves spending time in nature and often takes her children on hikes to teach them about the environment.",
    },
    {
        memberId: "memberId4",
        name: "Michael Smith",
        dob: "1995-08-10",
        photo: "/images/michael_smith.jpg",
        parents: ["memberId1", "memberId2"],
        spouse: ["memberId8"],
        children: ["memberId10", "memberId11"],
        story: "Michael Smith followed in his father's footsteps and became an engineer. He specialized in renewable energy and is now working on projects that aim to create a greener future. Michael married Lisa Brown, and they share a passion for sustainability. Together, they are raising two wonderful children.",
    },
    {
        memberId: "memberId5",
        name: "Anna Smith",
        dob: "1997-04-12",
        photo: "/images/anna_smith.jpg",
        parents: ["memberId1", "memberId2"],
        spouse: [],
        children: [],
        story: "Anna Smith is an accomplished pianist and music teacher. She has always loved music and began learning the piano at a very young age. Anna has performed in various concerts and enjoys teaching children to appreciate and play music. She is currently focusing on her career and dreams of opening her own music school someday.",
    },
    {
        memberId: "memberId6",
        name: "David Smith",
        dob: "2000-02-15",
        photo: "/images/david_smith.jpg",
        parents: ["memberId1", "memberId3"],
        spouse: ["memberId9"],
        children: ["memberId12", "memberId13"],
        story: "David Smith is a software developer who loves technology. He has always been fascinated by how things work and started coding at a young age. David now works for a leading tech company and spends his free time developing apps that solve everyday problems. He married Rachel Green, and they have two children together.",
    },
    {
        memberId: "memberId7",
        name: "Sophia Smith",
        dob: "2003-06-18",
        photo: "/images/sophia_smith.jpg",
        parents: ["memberId1", "memberId3"],
        spouse: [],
        children: [],
        story: "Sophia Smith is an avid traveler and photographer. She has a knack for capturing beautiful moments through her lens. Sophia has traveled to over 20 countries, documenting her experiences and sharing them with others through her photography blog. She dreams of turning her passion into a full-time career.",
    },
    {
        memberId: "memberId8",
        name: "Lisa Brown",
        dob: "1996-05-20",
        photo: "/images/lisa_brown.jpg",
        parents: [],
        spouse: ["memberId4"],
        children: ["memberId10", "memberId11"],
        story: "Lisa Brown is a nutritionist who loves helping people live healthier lives. She met Michael Smith at a community event, and they bonded over their love for the environment and healthy living. Lisa enjoys cooking nutritious meals for her family and spends her weekends working on community health programs.",
    },
    {
        memberId: "memberId9",
        name: "Rachel Green",
        dob: "2002-11-15",
        photo: "/images/rachel_green.jpg",
        parents: [],
        spouse: ["memberId6"],
        children: ["memberId12", "memberId13"],
        story: "Rachel Green is a yoga instructor who believes in the power of mindfulness and wellness. She met David Smith through mutual friends and was drawn to his enthusiasm for technology. Rachel runs her own yoga studio and hopes to inspire others to lead a balanced life through yoga and meditation.",
    },
    {
        memberId: "memberId10",
        name: "Noah Smith",
        dob: "2025-03-12",
        photo: "/images/noah_smith.jpg",
        parents: ["memberId4", "memberId8"],
        spouse: ["memberId14"],
        children: ["memberId16"],
        story: "Noah Smith is a budding architect with a passion for sustainable urban design. He aims to create buildings that harmonize with the environment. Noah married Grace Wilson, and together they dream of building an eco-friendly home for their family.",
    },
    {
        memberId: "memberId11",
        name: "Emma Smith",
        dob: "2027-05-25",
        photo: "/images/emma_smith.jpg",
        parents: ["memberId4", "memberId8"],
        spouse: [],
        children: [],
        story: "Emma Smith is a college student studying marine biology. She loves the ocean and is committed to marine conservation. Emma volunteers with local organizations to help protect marine life and hopes to work on international conservation projects after finishing her studies.",
    },
    {
        memberId: "memberId12",
        name: "Lucas Smith",
        dob: "2030-09-25",
        photo: "/images/lucas_smith.jpg",
        parents: ["memberId6", "memberId9"],
        spouse: ["memberId15"],
        children: ["memberId17"],
        story: "Lucas Smith is an entrepreneur who started his own tech company straight out of college. He loves finding creative solutions to complex problems and has developed a series of successful apps. Lucas is married to Olivia Martinez, and they are raising a young daughter together.",
    },
    {
        memberId: "memberId13",
        name: "Ella Smith",
        dob: "2032-11-22",
        photo: "/images/ella_smith.jpg",
        parents: ["memberId6", "memberId9"],
        spouse: [],
        children: [],
        story: "Ella Smith is an artist who creates beautiful illustrations inspired by nature. She sells her work online and enjoys teaching art workshops for children. Ella has always been inspired by her mother Rachel's passion for mindfulness, and she incorporates that philosophy into her artwork.",
    },
    {
        memberId: "memberId14",
        name: "Grace Wilson",
        dob: "2024-04-14",
        photo: "/images/grace_wilson.jpg",
        parents: [],
        spouse: ["memberId10"],
        children: ["memberId16"],
        story: "Grace Wilson is an environmental lawyer who works tirelessly to protect natural resources. She is married to Noah Smith, and together they share a vision of building a greener, more sustainable future. Grace enjoys hiking and spending time in nature with her family.",
    },
    {
        memberId: "memberId15",
        name: "Olivia Martinez",
        dob: "2028-02-18",
        photo: "/images/olivia_martinez.jpg",
        parents: [],
        spouse: ["memberId12"],
        children: ["memberId17"],
        story: "Olivia Martinez is a culinary chef who specializes in plant-based cuisine. She loves experimenting with flavors and creating healthy yet delicious dishes. Olivia met Lucas Smith at a tech conference and they bonded over their love for innovation—her in the kitchen, and him in the tech world.",
    },
    {
        memberId: "memberId16",
        name: "Jack Smith",
        dob: "2050-10-30",
        photo: "/images/jack_smith.jpg",
        parents: ["memberId10", "memberId14"],
        spouse: [],
        children: [],
        story: "Jack Smith is an aspiring filmmaker who loves telling stories through his camera lens. He enjoys creating documentaries about nature and the environment, inspired by his mother Grace's passion for protecting natural resources. Jack is currently working on his first full-length documentary.",
    },
    {
        memberId: "memberId17",
        name: "Ava Smith",
        dob: "2060-07-20",
        photo: "/images/ava_smith.jpg",
        parents: ["memberId12", "memberId15"],
        spouse: [],
        children: [],
        story: "Ava Smith is a talented dancer who has been training in ballet since she was a child. She dreams of joining a prestigious dance company and traveling the world to perform. Ava also loves teaching young children to dance and hopes to inspire the next generation of dancers.",
    },
].reduce((acc, x) => ({ ...acc, [x.memberId]: x }), {});

export default function HomePage() {
    const [selectedUser, setUser] = useState("memberId1");

    let user = data[selectedUser];

    return (
        <>
            <Card>
                <Group wrap="no-wrap" align="start" gap={50}>
                    <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                        height={250}
                    />
                    <Stack>
                        <Group justify="space-between">
                            <Text fw={700}>{user.name}</Text>
                            <Text c="dimmed">
                                {[user.dob, user.dod]
                                    .filter((x) => !!x)
                                    .map((x) => moment(x).format("D MMM, YYYY"))
                                    .join(" - ")}
                            </Text>
                        </Group>
                        <Text>{user.story}</Text>
                    </Stack>
                </Group>
            </Card>
            {["spouse", "parents", "children"]
                .filter((cat) => user[cat].length > 0)
                .map((cat) => {
                    return (
                        <Stack key={cat}>
                            <h1>{cat}</h1>
                            <Group>
                                {user[cat].map((x) => (
                                    <UserCard
                                        key={x}
                                        user={data[x]}
                                        onClick={(e) =>
                                            setUser(data[x].memberId)
                                        }
                                    />
                                ))}
                            </Group>
                        </Stack>
                    );
                })}
        </>
    );
}
