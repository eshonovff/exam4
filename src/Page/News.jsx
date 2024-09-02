
import { Button, Card } from 'antd'; // or use Material-UI equivalents
// import 'antd/dist/antd.css'; // if using Ant Design
const News = () => {
  return (
    <div>
       <div className="flex flex-col items-center w-full">
      {/* Header Section */}
      <div className="w-full h-[450px] bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/d191/3718/e8658a5929d5cfd0e7d8d87bbeb70edd?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K9k9ubV0-G~1tgmxYv~HAU0zzm51S7q9sbMOUrWO7RsQ6TsZWAyukeL4BBnoqBcPX1fCnhty6TKYYaiz~tOj1EGt0OSSqwH~0wbjU3isnt4eV1UIwAUfYFRdO7wFP7D0YM-3Qi29TrYvdQAA~OC-pF-LrqO1VOLy1~ALqiUGd-xHt0dt7B9ZxmITpOugYepSPJIQ~8a7X9xS~R2WPhXMfbhpQgbzjLmPk0YemM3gyTSWJcuWC8i1csGHHpuBRQydjo-PJcvmTKXXXV8lsGJWsq~gRvgjUj-H9NHFNVV9O33trdnnqV8a2XFcfItzBGtyjT7gGTpw7oKqlAXYSceBdw__')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-end p-8">
          <h1 className="text-white text-4xl font-bold">Today s property news</h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6 py-12 max-w-6xl">
        <Card className="hover:shadow-lg">
          <img src="https://s3-alpha-sig.figma.com/img/689b/c85a/58ff324090e63c7110b141f764e85766?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTHYPUKAKGDRGCnnaPskfRlTBB3oA6YfSxdcSnaupZiYO-GAijudtldidrys2fxu5QLmaWzvPHtHLJJSQV4YlONvgQGlZmeF3Lz~tycx2ClJMXoWMwnVsR7-rCI0oHFN94wvGsCtOj7qm4D-HzsASddh5fe4GETT52UfMBfDs7xOQxU6RrO90qcHN7igRGMa6aHlsZ4DsyljLHGS4mGvQNE-Z244jIjcdIvZYNF6q1kBp3gBGvlQPLmXgYGjTBAHTERsdygjeFf0q1IV8IMYq6Dnr3hSXFj4xqJNq5njJM9IZX84q7OrX1DDrbcWbnzl5aQg~Y0o8mkGzuwGm1p~GA__" alt="Tip of the week" className="w-full h-[200px] object-cover" />
          <h2 className="text-lg font-bold mt-4">Tips of the week</h2>
          <p className="text-gray-600">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          <Button className="mt-4" type="primary">Read more</Button>
        </Card>

        <Card className="hover:shadow-lg">
          <img src="https://s3-alpha-sig.figma.com/img/090e/c4b1/ac63b3c8367e8cb2078850f965a7e2b9?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SPeq9vsh9TQOyBpOVFRFdwhovp1~J5OVxqwcejYAArGi~Znqlu1WYIZK8WbSHKH4pczvyhxmP3wroROJry3IrDdIw8xciH8oV2VQ~fhIq6JuuNceOJkCXYS3FADVWBK9rt1MILVgVP27mH3dKil~C8qf37exeOacjOqfy-9IqFvq8~f4aG9qv70Y2XKGyCXTt9ZMC5XV7D8vkHwc5an~KwhFyrvF1bGaCJKHKER-7V6sfDUkWwhGuXiGBDamgiYpjbI571NOPAWHJVdt1jJwKb6ZEV3mkukSbUk34BT9B3W~rqXWhCERjUFFCA0hP-V7NjbaOQ3HTX1mAIQFvp154A__" alt="House price is high now" className="w-full h-[200px] object-cover" />
          <h2 className="text-lg font-bold mt-4">House price is high now</h2>
          <p className="text-gray-600">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          <Button className="mt-4" type="primary">Read more</Button>
        </Card>

        <Card className="hover:shadow-lg">
          <img src="https://s3-alpha-sig.figma.com/img/efdc/eebb/e4ac904faa2e60700e8753022a6c4784?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEYlSo77YT-cVCtKZFErG9-tqAvTX244asy0SKQCTrP~QM4FZXMuvvu~2sSJWgnz6rWf3w5jyq0us-2uVhIpDk8b8s6k3YexyXm0uhIaT-vVJw3gKBiw9XdQNVM-BF7Q0lQ8YxKOQPCL5JB7jwHzPUUxC2tbHm-Tx7WVJdGi4ummnECv9~yt8Z7LVIGZrP4SBm9SfV7~8AcNpsXJWkdD6~BDjvWFYyvP3xwwAnAoWFRIALBdY~c53o2bWxk-s4~NaD7pvVBfx-SiyFSTG7LrfpQICS8jQ4wbSd0iivTC6TcZQ2rRer0bcoeDiVHgszcgqQdqCYTqH9kTKZELVxN0-Q__" alt="Good investment in property" className="w-full h-[200px] object-cover" />
          <h2 className="text-lg font-bold mt-4">Good investment in property</h2>
          <p className="text-gray-600">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          <Button className="mt-4" type="primary">Read more</Button>
        </Card>
      </div>

      {/* Footer Section */}
      <div className="w-full flex justify-center py-6">
        <Button type="primary" className="text-lg">See more</Button>
      </div>
    </div>
    </div>
  )
}

export default News






