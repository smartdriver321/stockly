import AppHeader from './AppHeader/AppHeader'
import { Card } from '@/components/ui/card'
import AppTable from './AppTable/AppTable'

export default function Home() {
	return (
		<div className={`poppins p-5  border w-full min-h-screen`}>
			<Card className='flex flex-col shadow-none p-2'>
				<AppHeader />
				<AppTable />
			</Card>
		</div>
	)
}
