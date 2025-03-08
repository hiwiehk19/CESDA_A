

export default function Aboutus() {
    return (
        <section id="about" className=" w-full px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">

        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
    
            <h2 className="font-bold text-3xl leading-[1.1] text-[#0A6F9D] sm:text-3xl md:text-6xl">About Us</h2>
    
            <p className="max-w-[87%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            The Center for Evidence Synthesis, Support, and Development in Africa (CESDA) is an innovative private limited company established as an independent initiative by a team of champions in evidence-informed decision-making (EIDM) with extensive experience in the field.

            </p>
    
        </div>
    
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
    
            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                   
                    <div className="space-y-2">
                        <h3 className="font-bold text-2xl">Vision</h3>
                        <p className="text-sm text-muted-foreground">To be Africa’s premier hub to advance evidence-informed policy and development.</p>
                    </div>
                </div>
            </div>
    
            <div
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    
                    <div className="space-y-2">
                        <h3 className="font-bold text-2xl">Mission</h3>
                        <p className="text-sm">To drive EIDM in Africa by ensuring access to high-quality policy-relevant evidence, empowering policymakers and programmers, and fostering collaboration for equitable and sustainable development.</p>
                    </div>
                </div>
            </div>
    
        </div>
    
    </section>
    )
  }
  