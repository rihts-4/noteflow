import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SignOut } from "@/components/sign-out"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

const Page = async () => {
  const session = await auth()
  if (!session) redirect("/sign-in")
  // console.log(session)

  return (
    // <SidebarProvider>
    //   <AppSidebar />
    //   <SidebarInset>
    //     <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
    //       <SidebarTrigger className="-ml-1" />
    //       <Separator
    //         orientation="vertical"
    //         className="mr-2 data-[orientation=vertical]:h-4"
    //       />
    //       <Breadcrumb>
    //         <BreadcrumbList>
    //           <BreadcrumbItem className="hidden md:block">
    //             <BreadcrumbLink href="#">
    //               Building Your Application
    //             </BreadcrumbLink>
    //           </BreadcrumbItem>
    //           <BreadcrumbSeparator className="hidden md:block" />
    //           <BreadcrumbItem>
    //             <BreadcrumbPage>Data Fetching</BreadcrumbPage>
    //           </BreadcrumbItem>
    //         </BreadcrumbList>
    //       </Breadcrumb>
    //     </header>
    //     <div className="flex flex-1 flex-col gap-4 p-4">
    //       <div className="grid auto-rows-min gap-4 md:grid-cols-3">
    //         <div className="bg-foreground aspect-video rounded-xl" />
    //         <div className="bg-foreground aspect-video rounded-xl" />
    //         <div className="bg-foreground aspect-video rounded-xl" />
    //       </div>
    //       <div className="bg-foreground min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    //     </div>
    //   </SidebarInset>
    // </SidebarProvider>

    <div>
      Signed in as {session.user?.email}
      <SignOut />
    </div>
  )
}

export default Page