import CardDesigner from './components/CardDesigner'
import ContactManager from './components/ContactManager'
import SentCardTracker from './components/SentCardTracker'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Card Management System</h1>
      <Tabs defaultValue="design">
        <TabsList>
          <TabsTrigger value="design">Design Cards</TabsTrigger>
          <TabsTrigger value="contacts">Manage Contacts</TabsTrigger>
          <TabsTrigger value="sent">Sent Cards</TabsTrigger>
        </TabsList>
        <TabsContent value="design">
          <CardDesigner />
        </TabsContent>
        <TabsContent value="contacts">
          <ContactManager />
        </TabsContent>
        <TabsContent value="sent">
          <SentCardTracker />
        </TabsContent>
      </Tabs>
    </div>
  )
}

