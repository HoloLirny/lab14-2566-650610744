"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" value={0} />
      <Text order={6} mt="sm">
        Your review
      </Text>
      <Textarea placeholder="Do you enjoy eating?" minRows={3} />
      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Divider mt="sm" />
      <Group position="center">
        <Title order={4} mt="sm">
          Elon Musk
        </Title>
        <Rating defaultValue={5} mt="sm" readOnly />
      </Group>
      <Text color="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider mt="sm" />
      <Group position="center">
        <Title order={4} mt="sm">
          Mark Zuck
        </Title>
        <Rating defaultValue={4} mt="sm" readOnly />
      </Group>
      <Text color="dimmed" align="center">
        My favourite part is pepperoni
      </Text>

      <Pagination total={20} mt="lg" color="orange" position="center" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Korarit Pannopasri 650610744
      </Text>
    </Container>
  );
}
