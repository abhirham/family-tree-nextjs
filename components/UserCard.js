import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export default function UserCard({ user, onClick }) {
    return (
        <Card
            shadow="sm"
            padding="lg"
            style={{ width: 300, cursor: "pointer" }}
            radius="md"
            withBorder
            onClick={onClick}
        >
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{user.name}</Text>
                <Badge color="pink">On Sale</Badge>
            </Group>
        </Card>
    );
}
