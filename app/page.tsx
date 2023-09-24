import Image from 'next/image'

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <div>
                <button className='btn btn-primary'>Hello daisyUI!</button>
            </div>
            <article className="prose lg:prose-xl">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  
</article>
<div className="card w-96 glass">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
        </main>
    )
}
