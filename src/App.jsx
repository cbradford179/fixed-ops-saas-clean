import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";

export default function App() {
  const [activeTab, setActiveTab] = useState("communications");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">White-Labeled Fixed Ops Platform</h1>

      <Tabs defaultValue="communications" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="communications">Communications</TabsTrigger>
          <TabsTrigger value="video-mpi">Video MPI</TabsTrigger>
          <TabsTrigger value="checkin">Mobile Check-In</TabsTrigger>
          <TabsTrigger value="scheduler">Scheduler+</TabsTrigger>
        </TabsList>

        <TabsContent value="communications">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Customer Communications Hub</h2>
              <Input placeholder="Search customer by name, phone, or RO#" />
              <div className="flex space-x-2">
                <Button>Send Text</Button>
                <Button variant="secondary">Send Email</Button>
                <Button variant="outline">Make Call</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="video-mpi">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">ServiceCart Video MPI</h2>
              <p>Upload or record technician video walkthroughs for customer approval.</p>
              <Button>Record New Video</Button>
              <Button variant="secondary">View Past MPIs</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="checkin">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Mobile Check-In</h2>
              <p>Scan VIN, take walkaround photos, and collect signature.</p>
              <Button>Start New Check-In</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduler">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Appointment Scheduler+</h2>
              <p>View calendar, service menus, recalls, and technician availability.</p>
              <Button>Open Scheduler</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
