import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="ClearType" content="true" />
	<title>Nastasiu.Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#26292E" />
        <link href="/static/normalize.css" rel="stylesheet" />
        <link href="/static/style.css?v=1.0.1" rel="stylesheet" />
      </head>
      <body>{children}</body>
      <script defer data-domain="nastasiu.dev" src="https://data.websquad.ro/js/script.file-downloads.outbound-links.js"></script>
      <script defer src="/static/script.js"></script>
    </html>
  )
})
