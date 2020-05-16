import Link from 'next/link'

import Box from 'components/Box'
import Text from 'components/Text'

const Table = (props) => <Box as="table" textAlign="left" mt={32} width="100%" {...props} />

const THead = (props) => <Box as="th" bg="gray500" fontWeight={500} p={2} fontSize={14} {...props} />

const TData = (props) => (
  <Box as="td" p={2} borderTopWidth={1} borderColor="inherit" fontSize="sm" whiteSpace="normal" {...props} />
)

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a {...props} />
      </Link>
    )
  }

  return (
    <Text
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      color="hsl(208,99%,44%)"
      css={{
        textDecoration: 'none',
        transition: 'all 0.15s ease-out',
        borderBottom: '1px solid transparent',
        '&:hover': {
          borderBottom: '1px solid hsl(208,99%,44%)'
        }
      }}
      {...props}
    />
  )
}

const Quote = (props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      pl={12}
      pr={16}
      py={12}
      mt={16}
      mb={32}
      borderLeft="4px solid #3182ce"
      width="98%"
      bg="#ebf8ff"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 8
        }
      }}
      {...props}
    />
  )
}

const DocsHeading = (props) => (
  <Box
    css={`
      scroll-margin-top: 100px;
      scroll-snap-margin: 100px;
      &[id]: {
        pointerevents: 'none';
      }
      &[id]:before: {
        display: block;
        height: 6rem;
        margintop: -6rem;
        visibility: hidden;
        content: '';
      }
      &[id]:hover {
        a {
          opacity: 1;
        }
      }
    `}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          href={`#${props.id}`}
          color="blue500"
          fontWeight="normal"
          outline="none"
          opacity="0"
          ml="0.375rem"
        >
          #
        </Box>
      )}
    </Box>
  </Box>
)

const Hr = () => <Box bg="gray300" height={1} my={12} width="100%" />

const MDXComponents = {
  h1: (props) => <Text as="h1" fontSize={{ _: 32, md: 48 }} fontWeight={500} my={4} {...props} />,
  h2: (props) => <DocsHeading as="h2" fontSize={{ _: 20, md: 24 }} fontWeight={500} mt="2em" mb="1em" {...props} />,
  h3: (props) => <DocsHeading as="h3" fontSize={{ _: 16, md: 20 }} fontWeight={500} mt="1em" mb="0.5em" {...props} />,
  inlineCode: (props) => (
    <Text
      as="code"
      display="inline-block"
      fontFamily={`SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`}
      fontSize="0.84em"
      bg="rgb(254, 252, 191)"
      color="rgb(116, 66, 16)"
      px={3}
      borderRadius={2}
      {...props}
    />
  ),
  br: (props) => <Box height={24} {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => <Text as="p" mt="1rem" mb="2rem" lineHeight="1.625" {...props} />,
  ul: (props) => <Box as="ul" pt={8} pl={16} ml={8} mb={32} {...props} />,
  ol: (props) => <Box as="ol" pt={8} pl={16} ml={8} mb={32} {...props} />,
  li: (props) => <Box as="li" pb={4} {...props} />,
  blockquote: Quote
}

export default MDXComponents
