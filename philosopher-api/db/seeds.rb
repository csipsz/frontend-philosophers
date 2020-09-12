# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Branch.create(name: "Metaphysics", description: " the study of what is really real. Metaphysics deals with the so-called first principles of the natural order and the ultimate generalizations available to the human intellect. Specifically, ontology seeks to indentify and establish the relationships between the categories, if any, of the types of existent things")
Branch.create(name: "Epistemology", description: "the study of knowledge. In particular, epistemology is the study of the nature, scope, and limits of human knowledge")
Branch.create(name: "Idealism", description: "German idealism was a philosophical movement that emerged in Germany in the late 18th and early 19th centuries. It developed out of the work of Immanuel Kant in the 1780s and 1790s, and was closely linked both with Romanticism and the revolutionary politics of the Enlightenment. The best-known thinkers in the movement, besides Kant, were Johann Gottlieb Fichte, Friedrich Wilhelm Joseph Schelling, Georg Wilhelm Friedrich Hegel, and the proponents of Jena Romanticism (Friedrich Hölderlin, Novalis, and Karl Wilhelm Friedrich Schlegel). August Ludwig Hülsen, Friedrich Heinrich Jacobi, Gottlob Ernst Schulze, Karl Leonhard Reinhold, Salomon Maimon, Friedrich Schleiermacher, and Arthur Schopenhauer also made major contributions.")

Philosopher.create(work: "created idealism", name:"Immanuel Kant", nationality:"Prussian", birthdate:"1724/04/22", branch_id:3)
Philosopher.create(work: "thought his system is much better than Kant's", name:"Georg Wilhelm Friedrich Hegel ", nationality:"German", birthdate:"1770/08/27", branch_id:3)
Philosopher.create(work: "shit on everyone at the agora", name:"Socrates", nationality:"Greek", birthdate:"470 BC", branch_id:1)

Note.create(content: "Plato's teacher", philosopher_id: 3)
