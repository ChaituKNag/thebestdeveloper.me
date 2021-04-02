import React from "react"
import Link from "./common/Link"
import Text from "./styled/Text"

const MoreAboutMe = () => {
  return (
    <section>
      <Text>
        I live in Hyderabad, a beautiful and peaceful metropolitan city of the
        south Indian state of Telangana, find out more:
      </Text>

      <Text as="h3">
        Education{" "}
        <span role="img" aria-label="The book symbol">
          📖
        </span>
      </Text>

      <Text>
        I am a <u>Bachelor of Technology</u> graduate from{" "}
        <Link
          href="http://www.jntucek.org/About%20the%20College.htm"
          target="_blank"
        >
          JNTU College of Engineering, Kakinada
        </Link>
        .
      </Text>
      <Text as="h3">
        Hobbies{" "}
        <span
          role="img"
          aria-label="The emoji's of shuttle, table tennis, a boy and a girl."
        >
          🏸 🏓 👦🏻 👧🏻
        </span>
      </Text>
      <Text>
        I play shuttle badminton and table tennis frequently. My favorite thing
        to do is just spending time with my 6 year old son and 2 year old
        daughter.
      </Text>
    </section>
  )
}

export default MoreAboutMe
