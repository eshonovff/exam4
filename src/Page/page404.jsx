

const Page404 = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900">
  <div className="relative flex flex-col items-center justify-center px-20 pt-8 pb-36 w-full max-w-2xl text-center">
    <img
      loading="lazy"
      srcSet="/src/assets/IMG.png"
      className="object-cover absolute inset-0 w-full h-full opacity-10"
    />
    <div className="relative z-10">
      <div className="text-9xl font-bold mb-8 max-md:text-7xl">404</div>
      <div className="text-5xl font-bold mb-4 max-md:text-4xl">
        Page Not Found
      </div>
      <p className="text-lg mb-8 max-md:text-base">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Page404
