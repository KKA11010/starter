import { description, name, ogImgUrl } from '@/components/info'

export default function Head() {
	return (
		<>
			<title>{name}</title>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.ico" />
			{/* <link rel="canonical" href="" /> */}
			<meta property="og:title" content={name} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImgUrl} />
			<meta property="og:image:url" content={ogImgUrl} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={name} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImgUrl} />
		</>
	)
}
